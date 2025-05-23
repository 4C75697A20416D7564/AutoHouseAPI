// Importa a função que gera um ID único.
import { v4 as uuid } from 'uuid';

// Define a classe Category (Categoria).
class Category {
  id?: string; // ID opcional, será gerado se não for informado.
  name: string; // Nome da categoria.
  desc: string; // Descrição da categoria.
  create_at: Date; // Data de criação.

  constructor() {
    // Gera um ID automaticamente se não existir.
    if (!this.id) {
      this.id = uuid();
    }
  }
}

// Torna a classe disponível para uso em outros arquivos.
export { Category };
