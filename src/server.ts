// Importa o framework Express.
import express from 'express';
// Importa as rotas de categorias.
import { categoriesRoutes } from './router/categories.routes';
// Importa as rotas de especificações.
import { specificationsRoutes } from './router/specifications.routes';

// Cria a aplicação Express.
const app = express();

// Permite que a aplicação receba dados no formato JSON no corpo da requisição.
app.use(express.json());

// Define que todas as requisições para '/categories' serão tratadas pelas rotas de categorias.
app.use('/categories', categoriesRoutes);
// Define que todas as requisições para '/specifications' serão tratadas pelas rotas de especificações.
app.use('/specifications', specificationsRoutes);

// Inicia o servidor na porta 3333 e mostra uma mensagem no console.
app.listen(3333, () => console.log('Server is Running\nPORT -> 3333'));
