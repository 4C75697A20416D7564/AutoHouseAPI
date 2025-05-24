// Importa o framework Express.
import express from "express";
import { router } from "./router";

// Cria a aplicação Express.
const app = express();

// Permite que a aplicação receba dados no formato JSON no corpo da requisição.
app.use(express.json());

app.use(router);

// Inicia o servidor na porta 3333 e mostra uma mensagem no console.
app.listen(3333, () => console.log("Server is Running\nPORT -> 3333"));
