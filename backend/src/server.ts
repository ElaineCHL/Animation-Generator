import dotenv from "dotenv";
dotenv.config(); // load env variables

import cors from "cors";
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import apiRoutes from "./routes/apiRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // parse JSON bodies: req.body
app.use(bodyParser.text({ type: "text/plain" }));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 DSL-to-TypeScript API running at http://localhost:${PORT}`);
});
