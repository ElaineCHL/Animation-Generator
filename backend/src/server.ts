import dotenv from "dotenv";
dotenv.config(); // load env variables

import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import apiRoutes from "./routes/apiRoutes";


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
