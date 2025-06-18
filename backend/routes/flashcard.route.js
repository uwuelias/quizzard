import express from "express";
import {
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from "../controller/flashcard.controller.js";

const router = express.Router();

router.get("/", getFlashcards);
router.post("/", createFlashcard);
router.delete("/:id", deleteFlashcard);
router.put("/:id", updateFlashcard);

export default router;
