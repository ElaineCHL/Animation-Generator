import express from "express";
import multer from "multer";
import parseController from "../controllers/parser.controller";
import promptController from "../controllers/prompt.controller";
import PdfController from "../controllers/uploadPdf.controller";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/translate", parseController);
router.post("/prompt", promptController);
router.post("/upload-pdf", upload.single("file"), PdfController);

export default router;
