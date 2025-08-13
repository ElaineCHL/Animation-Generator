import { createLogger, format, transports } from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const token = process.env.LOGTAIL_SOURCE_TOKEN as string;
const endpoint = process.env.LOGTAIL_ENDPOINT as string;
const level = process.env.LOG_LEVEL || "info";

// log format
const myFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level} | ${message}`;
});

export const logtail = new Logtail(token, { endpoint });

const logger = createLogger({
  level,
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.errors({ stack: true }),
  ),
  transports: [
    new LogtailTransport(logtail), // Logtail
    new transports.Console({ // console
      level,
      format: format.combine(
        format.colorize(),
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        myFormat,
      ),
    }),
  ],
});

export default logger;