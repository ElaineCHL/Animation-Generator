import { useEffect, useState } from "react";
import { Util } from "../lib/Utils";
import AxiosInstance from "../lib/axios";
import CanvasWrapper from "../components/CanvasWrapper";

const EditorPage = () => {
  const [dsl, setDsl] = useState("circle at (100, 100) radius 50 color red");
  const [tsCode, setTsCode] = useState("// Translated TypeScript code will appear here...");
  const [error, setError] = useState("");

  async function translateDSL(dsl: string): Promise<string> {
    setError("");
    try {
      const response = await AxiosInstance.post("/translate", {
        data: dsl,
      });
      return response.data.code;
    } catch (error: unknown) {
      let errorMessage = "";
      if (typeof error === "object" && error !== null && "response" in error) {
        // @ts-expect-error: error.response may exist if error is AxiosError
        errorMessage = "// " + (error.response?.data?.message || "Error: Unable to translate");
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
      return errorMessage;
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      translateDSL(dsl).then(setTsCode);
    }, 500);

    return () => clearTimeout(delay);
  }, [dsl]);

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-1">
        <div>
          <label>DSL Input</label>
          <textarea
            value={dsl}
            onChange={(e) => setDsl(e.target.value)}
            className="w-full h-64 p-2 border rounded bg-gray-50"
          />
        </div>

        <div>
          <label>Generated TypeScript</label>
          <pre className="w-full h-64 p-2 overflow-auto bg-black text-green-300">
            {tsCode}
          </pre>
        </div>

        <div>
          <label>Animation Preview</label>
          {Util.isEmptyString(error) ? (
            <CanvasWrapper animationCode={tsCode} />
          ) : (
            <div className="border p-4 bg-yellow-100 text-red-800 rounded">
              {error}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default EditorPage;
