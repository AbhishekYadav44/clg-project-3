import express from "express";
import { upload } from "../middlewares/upload.js";
import { getPosts, postDetails } from "../controllers/card.controller.js";

const mainRouter = express.Router()

mainRouter.post('/post', upload.single("image"), postDetails)
mainRouter.get("/posts", getPosts);

export default mainRouter