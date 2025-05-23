import { response } from 'express';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  desc: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, desc }: IRequest): void {
    const categoryAleardExists = this.categoriesRepository.findByName(name);

    if (categoryAleardExists) {
      // <== Se categoria existir Faça:
      throw new Error('Categoria Ja Existente');
    }

    this.categoriesRepository.create({ name, desc });
  }
}
export { CreateCategoryUseCase };
