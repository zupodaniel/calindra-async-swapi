import express from "express";
import swapiController from "./src/controller/swapiController.js";

const app = express();


app.use(express.json());

swapiController(app)


export default app

