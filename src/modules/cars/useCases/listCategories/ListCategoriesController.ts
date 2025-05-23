// Importa os tipos Request e Response do Express.
import { Request, Response } from 'express';
// Importa o caso de uso para listar categorias.
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

// Controller que responde a requisição de listar categorias.
class ListCategoriesController {
  // Recebe o caso de uso via construtor.
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  // Método que trata a requisição HTTP.
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute(); // Busca todas as categorias.
    return response.status(200).json(all); // Envia como JSON na resposta.
  }
}

// Exporta o controller para ser usado em outros arquivos.
export { ListCategoriesController };
