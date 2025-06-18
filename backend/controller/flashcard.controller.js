import mongoose from "mongoose";
import Flashcard from "../models/flashcard.model.js";

export const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({});
    res.status(200).json({ success: true, data: flashcards });
  } catch (error) {
    console.error("Error in Get Flashcard", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createFlashcard = async (req, res) => {
  const { vocab, definition } = req.body;

  if (!vocab || !definition) {
    return res.status(400).json({
      success: false,
      message: "Please provide both vocab and definition",
    });
  }

  try {
    const newFlashcard = new Flashcard({ vocab, definition });
    await newFlashcard.save();
    res.status(201).json({ success: true, data: newFlashcard });
  } catch (error) {
    console.error("Error in Create Flashcard:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const flashcard = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Flashcard ID" });
  }

  try {
    const updatedFlashcard = await Flashcard.findByIdAndUpdate(id, flashcard, {
      new: false,
    });
    res.status(200).json({ success: true, message: "flashcard updated" });
  } catch (error) {
    console.error("Error in updating flashcard:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteFlashcard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Flashcard ID" });
  }

  try {
    await Flashcard.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Flashcard deleted" });
  } catch (error) {
    console.error("Error in Deleting Flashcard:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
