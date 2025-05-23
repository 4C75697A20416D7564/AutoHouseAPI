// Importa a classe Specification.
import { Specification } from '../../model/Specification';
// Importa as interfaces de tipagem.
import {
  ISpecificatiosRepository,
  ICreateSpecificatiosDTO,
} from '../interface/ISpecificatiosRepository';

// DTO (Data Transfer Object) serve para transferir dados, isolando os modelos das regras de negócio.

// Classe que gerencia as especificações.
class SpecificatiosRepository implements ISpecificatiosRepository {
  private specifications: Specification[]; // Lista privada de especificações.

  constructor() {
    this.specifications = []; // Inicializa a lista vazia.
  }

  // Cria uma nova especificação.
  create({ name, desc }: ICreateSpecificatiosDTO): void {
    const specification = new Specification(); // Cria com ID automático.

    // Preenche a especificação com os dados.
    Object.assign(specification, {
      name,
      desc,
      create_at: new Date(), // Data atual.
    });

    // Adiciona na lista.
    this.specifications.push(specification);

    // Exibe no console (para teste).
    console.log(specification);
  }

  // Busca uma especificação pelo nome.
  findByName(name: string): Specification {
    const specification = this.specifications.find((especificacao) => especificacao.name === name);
    return specification;
  }
}

// Exporta a classe para ser usada em outros arquivos.
export { SpecificatiosRepository };
