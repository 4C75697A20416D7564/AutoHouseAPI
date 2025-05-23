import {
  ICreateSpecificatiosDTO,
  ISpecificatiosRepository,
} from '../repositories/ISpecificatiosRepository';

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificatiosRepository) {}

  execute({ name, desc }: ICreateSpecificatiosDTO): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      // <== Se categoria existir Faça:
      throw new Error('Especificacao Ja Existente');
    }

    this.specificationsRepository.create({
      name,
      desc,
    });
  }
}
export { CreateSpecificationService };
