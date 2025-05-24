// Importa os tipos Request e Response do Express.
import { Response, Request } from 'express';
// Importa o caso de uso para criar categoria.
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// Controlador que lida com a requisição de criar categoria.
class CreateCategoryController {
  // Recebe o caso de uso como dependência (injeção de dependência).
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  // Método que trata a requisição HTTP.
  handle(request: Request, response: Response): Response {
    const { name, desc } = request.body; // Pega os dados enviados pelo cliente.

    this.createCategoryUseCase.execute({ name, desc }); // Executa o caso de uso.

    return response.status(201).send(); // Retorna resposta de sucesso.
  }
}

// Exporta o controlador para ser usado em outros arquivos.
export { CreateCategoryController };
