import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
  {
    /*
    // links each card to the user who created it using MongoDB ObjectId reference
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    */
    vocab: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
export default Flashcard;
