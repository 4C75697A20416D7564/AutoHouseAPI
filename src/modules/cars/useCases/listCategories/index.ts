// Importa a instância compartilhada do repositório de categorias.
import { categoriesRepository } from '../../repositories';
// Importa o controller que trata a listagem das categorias.
import { ListCategoriesController } from './ListCategoriesController';
// Importa o caso de uso com a lógica para listar categorias.
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

// Cria o caso de uso usando o repositório compartilhado.
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
// Cria o controller, passando o caso de uso criado.
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

// Exporta o controller para ser usado em rotas ou em outras partes da aplicação.
export { listCategoriesController };
