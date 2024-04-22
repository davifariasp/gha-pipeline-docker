import { Request, Response } from "express";
import { listUser } from "../app";

async function create(req: Request, res: Response) {
  try {
    const user = req.body;

    listUser.push(user);

    return res.status(201).json({ message: "Usuário criada com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return res.status(500).json({ message: "Erro ao criar usuário." });
  }
}

async function login(req: Request, res: Response) {
  try {
    

    // Extrai os dados do corpo da requisição
    const user = req.body;

    // Lógica para verificar se o usuário existe
    const userExists = listUser.find(
      (existingUser) =>
        existingUser.login === user.login && existingUser.senha === user.senha
    );

    if (userExists) {
      return res.status(201).json({ message: "Login efetuado com sucesso!" });
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return res.status(500).json({ message: "Erro ao realizar login." });
  }
}

async function list(req: Request, res: Response) {
  try {
    return res.status(201).json(listUser);
  } catch (error) {
    console.error("Erro ao listar clientes:", error);
    return res.status(500).json({ message: "Erro ao listar usuários." });
  }
}

export default {
  create,
  login,
  list,
};
