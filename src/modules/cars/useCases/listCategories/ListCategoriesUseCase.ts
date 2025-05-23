// Importa a classe Category.
import { Category } from '../../model/Category';
// Importa a interface do repositório de categorias.
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

// Caso de uso para listar categorias.
class ListCategoriesUseCase {
  // Recebe o repositório no construtor.
  constructor(private categoriesRepository: ICategoriesRepository) {}

  // Executa a listagem de categorias.
  execute(): Category[] {
    const categories = this.categoriesRepository.list(); // Pega todas as categorias.
    return categories; // Retorna a lista.
  }
}

// Exporta o caso de uso para uso em outras partes do sistema.
export { ListCategoriesUseCase };
