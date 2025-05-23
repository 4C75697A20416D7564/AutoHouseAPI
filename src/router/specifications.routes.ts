import { response, Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificatiosRepository } from '../modules/cars/repositories/SpecificatiosRepository';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificatiosRepository();
specificationsRoutes.post('/', (request, response) => {
  const { name, desc } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, desc });

  return response.status(201).send();
});

export { specificationsRoutes };
