// Importa a classe Specification.
import { Specification } from '../model/Specification';

// Define o formato dos dados para criar uma especificação.
interface ICreateSpecificatiosDTO {
  name: string; // Nome da especificação.
  desc: string; // Descrição da especificação.
}

// Define as funções que o repositório de especificações deve ter.
interface ISpecificatiosRepository {
  create({ name, desc }: ICreateSpecificatiosDTO): void; // Criar nova especificação.
  findByName(name: string): Specification; // Buscar especificação pelo nome.
}

// Exporta as interfaces para uso em outros arquivos.
export { ISpecificatiosRepository, ICreateSpecificatiosDTO };
