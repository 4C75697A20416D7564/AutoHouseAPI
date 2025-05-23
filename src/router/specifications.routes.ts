import { Router } from 'express';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecifications/CreateSpecificationUseCase';
import { SpecificatiosRepository } from '../modules/cars/repositories/implementation/SpecificatiosRepository';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificatiosRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, desc } = request.body;
  const createSpecificationService = new CreateSpecificationUseCase(specificationsRepository);

  createSpecificationService.execute({ name, desc });

  return response.status(201).send();
});

export { specificationsRoutes };
