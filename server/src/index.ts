import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("Dr.Meals server running ✅"));
app.listen(5000, () => console.log("Server on http://localhost:5000"));