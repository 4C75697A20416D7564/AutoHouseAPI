import { Category } from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  create({ name, desc }: ICreateCategoryDTO): void {
    const category = new Category(); // cria um objeto categoria ja com o uuid, usa-se para iniciar uma categoria com uuid ja instanciado

    Object.assign(category, {
      // função do javascript Object.assign permite prencher de forma limpa um objeto, no caso op objeto category
      name,
      desc,
      create_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    //LEMBRE-SE QUANDO USAR FIND() USAR OUTROS NOMES DE VARIAVEIS PARA NAO DAR BUG
    const category = this.categories.find((categoria) => categoria.name === name);
    return category;
  }
}
export { CategoriesRepository };
