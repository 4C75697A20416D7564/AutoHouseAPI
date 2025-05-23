import { Specification } from '../model/Specification';
import { ISpecificatiosRepository, ICreateSpecificatiosDTO } from './ISpecificatiosRepository';

//DTO - Data Transfer Object serve pra isolar os models de outras classes

class SpecificatiosRepository implements ISpecificatiosRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ name, desc }: ICreateSpecificatiosDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      desc,
      create_at: new Date(),
    });

    this.specifications.push(specification);
    console.log('Criado especificaçõesn\n' + { specification });
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((especificacao) => especificacao.name === name);
    return specification;
  }
}
export { SpecificatiosRepository };
