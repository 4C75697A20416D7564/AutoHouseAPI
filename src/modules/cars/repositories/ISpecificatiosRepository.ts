import { Specification } from '../model/Specification';

interface ICreateSpecificatiosDTO {
  name: string;
  desc: string;
}

interface ISpecificatiosRepository {
  //findByName(name: string): Category;
  //list(): Category[];
  create({ name, desc }: ICreateSpecificatiosDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificatiosRepository, ICreateSpecificatiosDTO };
