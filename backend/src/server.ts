import dotenv from "dotenv";
dotenv.config(); // load env variables

import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import apiRoutes from "./routes/apiRoutes";
import logger, { logtail } from "./util/logger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // parse JSON bodies: req.body
app.use(bodyParser.text({ type: "text/plain" }));
app.use("/audio", express.static(path.resolve(__dirname, "../public/audio")));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 DSL-to-TypeScript API running at http://localhost:${PORT}`);
});

// Flush logs when shutting down
["SIGTERM", "SIGINT", "beforeExit"].forEach((event) => {
  process.on(event, async () => {
    logger.info(`🛑 Server shutting down due to ${event}...`);
    await logtail.flush();
    process.exit(0);
  });
});
