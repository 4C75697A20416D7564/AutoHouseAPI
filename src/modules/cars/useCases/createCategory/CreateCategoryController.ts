import { Response, Request } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, desc } = request.body;

    this.createCategoryUseCase.execute({ name, desc });
    return response.status(200).send();
  }
}
export { CreateCategoryController };
