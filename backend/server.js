import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Flashcard from "./models/flashcard.model.js";
import mongoose from "mongoose";
import flashcardRoutes from "./routes/flashcard.route.js";

dotenv.config(); // reads .env file and parses all the key-value pairs

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // allow us to accept json data in the req.body

app.use("/flashcards", flashcardRoutes); // // attach flashcard-related routes (GET, POST, PUT, DELETE) under '/flashcards'

app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});
