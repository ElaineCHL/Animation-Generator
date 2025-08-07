import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Util } from "../lib/Utils";
import AxiosInstance from "../lib/axios";
import CanvasWrapper, { type CanvasWrapperHandle } from "../components/CanvasWrapper";
import CopyButton from "../components/CopyButton";

const EditorPage = () => {
  const [dsl, setDsl] = useState("c1 = circle at (100, 100) radius 50 color red");
  const [tsCode, setTsCode] = useState("Translated TypeScript code will appear here...");
  const [error, setError] = useState("");
  const [showGrid, setShowGrid] = useState(true);
  const [audioUrls, setAudioUrls] = useState<string[]>([]);

  const canvasRef = useRef<CanvasWrapperHandle>(null);

  async function playNarrationAndAnimation() {
    canvasRef.current?.play(); // play animation
    await playAudio(audioUrls); // play audio
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      translateDSL(dsl).then(setTsCode);
    }, 500);

    return () => clearTimeout(delay);
  }, [dsl]);

  async function translateDSL(dsl: string): Promise<string> {
    setError("");
    try {
      const response = await AxiosInstance.post("/translate", {
        data: dsl,
      });
      setAudioUrls(response.data.tts);
      return response.data.code;
    } catch (error: unknown) {
      let errorMessage = "";
      if (typeof error === "object" && error !== null && "response" in error) {
        // @ts-expect-error: error.response may exist if error is AxiosError
        errorMessage = error.response?.data?.message || "Translation Error: Unable to translate";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
      return errorMessage;
    }
  }

  async function playAudio(urls: string[]) {
    for (const url of urls) {
      await new Promise<void>((resolve) => {
        const audio = new Audio(`http://localhost:3000/audio/${url}`);
        audio.onended = () => resolve();
        audio.onerror = () => {
          console.error("Audio failed to play:", url);
          resolve();
        };
        audio.play().catch((err) => {
          console.error("Playback error:", err);
          resolve();
        });
      });
    }
  }

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-1">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-bold">DSL Input</label>
            <CopyButton textToCopy={dsl} />
          </div>
          <Editor
            height="300px"
            defaultLanguage="plaintext"
            value={dsl}
            onChange={(value) => setDsl(value ?? "")}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-bold">Generated TypeScript</label>
            <CopyButton textToCopy={tsCode} />
          </div>
          <Editor
            height="300px"
            defaultLanguage="typescript"
            value={tsCode}
            theme="vs-dark"
            options={{
              readOnly: true,
            }}
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2">
            <span className="font-bold">Animation Preview</span>
            <span className="px-5">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                />
                <span>Show Gridlines</span>
              </label>

              <button className="bg-blue-600 text-white rounded hover:bg-blue-700 px-4 py-2 m-2" onClick={playNarrationAndAnimation}>
                Play
              </button>

              {audioUrls.length === 0 &&
                <span style={{ color: "gray" }}>No narration available.</span>
              }
            </span>
          </label>

          {Util.isEmptyString(error) ? (
            <CanvasWrapper
              ref={canvasRef}
              animationCode={tsCode}
              showGrid={showGrid}
              onError={(errMsg) => setError("Canvas error: " + errMsg)}
            />
          ) : (
            <div className="border p-4 bg-yellow-100 text-red-800 rounded">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
