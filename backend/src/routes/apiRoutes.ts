import express from "express";
import multer from "multer";
import dslController from "../controllers/dslController";
import pdfRagController from "../controllers/pdfRagController";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // store in memory

router.post("/translate", dslController);
router.post(
  "/rag",
  upload.single("file"), // parse multipart/form-data request
  pdfRagController,
);

export default router;
