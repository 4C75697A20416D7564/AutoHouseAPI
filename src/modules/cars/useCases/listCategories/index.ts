// Importa a mesma instância compartilhada
import { categoriesRepository } from '../../repositories';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

// Cria o caso de uso e o controller com a mesma instância
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
