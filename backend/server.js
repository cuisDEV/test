import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/Product.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connecté à MongoDB Atlas");
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend en ligne sur le port ${PORT}`));  })
  .catch(err => console.error("Erreur MongoDB:", err));
