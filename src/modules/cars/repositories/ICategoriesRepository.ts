// Importa a classe Category.
import { Category } from '../model/Category';

// Interface que define o formato para criar uma categoria.
interface ICreateCategoryDTO {
  name: string; // Nome da categoria.
  desc: string; // Descrição da categoria.
}

// Interface que define as funções que um repositório de categorias deve ter.
interface ICategoriesRepository {
  findByName(name: string): Category; // Buscar categoria pelo nome.
  list(): Category[]; // Listar todas as categorias.
  create({ name, desc }: ICreateCategoryDTO): void; // Criar nova categoria.
}

// Exporta as interfaces para uso em outros arquivos.
export { ICategoriesRepository, ICreateCategoryDTO };
