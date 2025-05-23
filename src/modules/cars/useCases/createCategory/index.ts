// Importa a instância compartilhada do repositório de categorias.
import { categoriesRepository } from '../../repositories';
// Importa o controller que vai lidar com as requisições.
import { CreateCategoryController } from './CreateCategoryController';
// Importa o caso de uso que contém a lógica para criar categoria.
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// Cria o caso de uso, usando o repositório compartilhado.
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
// Cria o controller, passando o caso de uso criado.
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

// Exporta o controller para ser usado em rotas ou outras partes do sistema.
export { createCategoryController };
