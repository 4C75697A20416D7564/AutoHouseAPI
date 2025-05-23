// Importa a classe Category.
import { Category } from '../model/Category';
// Importa as interfaces de tipagem.
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

// Classe responsável por gerenciar as categorias.
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]; // Lista privada de categorias.

  constructor() {
    this.categories = []; // Inicializa a lista vazia.
  }

  // Cria uma nova categoria.
  create({ name, desc }: ICreateCategoryDTO): void {
    const category = new Category(); // Cria a categoria com ID gerado.

    // Preenche a categoria com os dados recebidos.
    Object.assign(category, {
      name,
      desc,
      create_at: new Date(), // Data atual.
    });

    // Adiciona a categoria na lista.
    this.categories.push(category);
  }

  // Retorna todas as categorias.
  list(): Category[] {
    return this.categories;
  }

  // Procura uma categoria pelo nome.
  findByName(name: string): Category {
    // Importante: usar nomes diferentes na função para evitar confusão.
    const category = this.categories.find((categoria) => categoria.name === name);
    return category;
  }
}

// Torna a classe disponível para uso em outros arquivos.
export { CategoriesRepository };
