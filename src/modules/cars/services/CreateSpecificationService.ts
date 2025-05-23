// Importa os tipos usados para criação e repositório de especificações.
import {
  ICreateSpecificatiosDTO,
  ISpecificatiosRepository,
} from '../repositories/ISpecificatiosRepository';

// Serviço responsável por criar especificações.
class CreateSpecificationService {
  // Recebe o repositório de especificações via construtor.
  constructor(private specificationsRepository: ISpecificatiosRepository) {}

  // Executa a criação de uma especificação.
  execute({ name, desc }: ICreateSpecificatiosDTO): void {
    // Verifica se a especificação já existe pelo nome.
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      // Se já existe, lança um erro para evitar duplicação.
      throw new Error('Especificação já existente');
    }

    // Se não existe, cria uma nova especificação.
    this.specificationsRepository.create({ name, desc });
  }
}

// Exporta o serviço para uso em outras partes do sistema.
export { CreateSpecificationService };
