import express from "express";
import morgan from "morgan";
import { Request, Response } from "express";
import userRouter from "./routes/userRouter";

const app = express();

app.use(morgan("tiny"));

//para receber json no body da requisicao
app.use(express.json());

type User = {
  login: string;
  senha: string;
};

let listUser: Array<User> = [];

//iniciar server
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!").status(200);
});

//rotas
app.use("/user", userRouter);

export default app;
export { listUser };
