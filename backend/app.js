import express from "express";
import connectDB from "./db/db.js";

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
