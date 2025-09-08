import express from "express";
import { createCase, listCases, getCaseById, updateCase, deleteCase } from "../controllers/caseController.js";

const router = express.Router();

router.post("/cases", createCase);
router.get("/cases", listCases);
router.get("/cases/:id", getCaseById);
router.put("/cases/:id", updateCase);
router.delete("/cases/:id", deleteCase);

export default router;
