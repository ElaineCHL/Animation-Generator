import * as fs from 'fs';

export default class Util {
  static ensureDirectoryExists(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  static isEmptyString(value: unknown): boolean {
    return typeof value === "string" && value.trim().length === 0;
  }
}