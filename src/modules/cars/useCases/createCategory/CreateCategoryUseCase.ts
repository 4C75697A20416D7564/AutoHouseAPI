// Importa a interface do repositório de categorias.
import { ICategoriesRepository } from '../../repositories/interface/ICategoriesRepository';

// Define a estrutura dos dados recebidos.
interface IRequest {
  name: string; // Nome da categoria.
  desc: string; // Descrição da categoria.
}

// Caso de uso: criar uma nova categoria.
class CreateCategoryUseCase {
  // Recebe o repositório como dependência.
  constructor(private categoriesRepository: ICategoriesRepository) {}

  // Executa a lógica para criar a categoria.
  execute({ name, desc }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name); // Verifica se já existe.

    if (categoryAlreadyExists) {
      // Se existir, lança erro.
      throw new Error('Categoria já existente');
    }

    // Se não existir, cria a categoria.
    this.categoriesRepository.create({ name, desc });
  }
}

// Exporta o caso de uso para ser usado em outros arquivos.
export { CreateCategoryUseCase };
