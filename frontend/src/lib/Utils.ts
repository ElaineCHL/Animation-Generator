export class Util {
  public static sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public static now() {
    return performance.now();
  }

  public static degreeToRadian(degree: number) {
    return degree * Math.PI / 180;
  }

  public static isEmptyString(value: unknown): boolean {
    return typeof value === "string" && value.trim() === "";
  }
}
