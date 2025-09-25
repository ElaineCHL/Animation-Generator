import * as path from "path";
import Util from "./util";
const gTTS = require("gtts");

export async function generateTTS(
  texts: string[],
  lang: string = "en",
): Promise<string[]> {
  const results: string[] = [];

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i].trim();
    if (!text) continue;

    const timestamp = Date.now() + i;
    const filename = `${timestamp}.mp3`;
    const filepath = path.join(__dirname, "../../public/audio", filename);

    const directory = path.dirname(filepath);
    Util.ensureDirectoryExists(directory);

    await new Promise<void>((resolve, reject) => {
      const gtts = new gTTS(text, lang);
      gtts.save(filepath, (err: Error | null) => {
        if (err) return reject(err);
        results.push(filename);
        resolve();
      });
    });
  }
  return results;
}
