// Importa a instância compartilhada do repositório de categorias.
import { SpecificatiosRepository } from '../../repositories/implementation/SpecificatiosRepository';

// Importa o controller que trata a listagem das categorias.
import { CreateSpecificationController } from './CreateSpecificationController';
// Importa o caso de uso com a lógica para listar categorias.
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificatiosRepository();
// Cria o caso de uso usando o repositório compartilhado.
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
// Cria o controller, passando o caso de uso criado.
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

// Exporta o controller para ser usado em rotas ou em outras partes da aplicação.
export { createSpecificationController };
