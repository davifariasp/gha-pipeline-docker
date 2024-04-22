import supertest from "supertest";
import app from "../src/app"; // Supondo que 'app' seja sua instância do Express.js

describe("Test User Controller", () => {
  test("Deve criar usuário com sucesso", async () => {
    const newUser = {
      login: "teste",
      senha: "123456",
    };

    const response = await supertest(app).post("/user/create").send(newUser);

    expect(response.status).toBe(201);
    // Adicione mais asserções conforme necessário para verificar se o usuário foi criado com sucesso
  });

  test("Deve fazer o login com sucesso", async () => {
    const user = {
      login: "teste",
      senha: "123456",
    };

    const response = await supertest(app).post("/user/login").send(user);

    expect(response.status).toBe(201);
    // Adicione mais asserções conforme necessário para verificar se o usuário foi criado com sucesso
  });

  test("Deve listar o usuários com sucesso", async () => {

    const response = await supertest(app).get("/user/list");

    expect(response.status).toBe(201);
    // Adicione mais asserções conforme necessário para verificar se o usuário foi criado com sucesso
  });
    

  test("Erro no login", async () => {
    const user = {
      login: "teste",
      senha: "12345",
    };

    const response = await supertest(app).post("/user/login").send(user);

    expect(response.status).toBe(500);
    // Adicione mais asserções conforme necessário para verificar se o usuário foi criado com sucesso
  });
});
