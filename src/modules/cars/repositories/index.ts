// Importa a classe responsável por gerenciar as categorias.
import { CategoriesRepository } from './CategoriesRepository';

// Cria uma instância única do repositório.
const categoriesRepository = new CategoriesRepository();

// Exporta a instância para ser usada em outros arquivos.
export { categoriesRepository };

// ✅ Cria um "bau" único para guardar e pegar categorias.
// Todo mundo usa a mesma instância para criar, listar e buscar.
