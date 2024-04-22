import express from "express";
import morgan from "morgan";
import { Request, Response } from "express";

const app = express();

app.use(morgan("tiny"));

//iniciar server
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!").status(200);
});

export default app;