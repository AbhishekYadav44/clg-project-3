import express from "express";
import postRoutes from "./routes/main.routes.js";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api", postRoutes);

export default app