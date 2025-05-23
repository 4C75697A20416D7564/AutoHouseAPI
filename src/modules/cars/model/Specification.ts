// Importa a função que gera um ID único.
import { v4 as uuid } from 'uuid';

// Define a classe Specification (Especificação).
class Specification {
  id?: string; // ID opcional, será gerado se não for informado.
  name: string; // Nome da especificação.
  desc: string; // Descrição da especificação.
  create_at: Date; // Data de criação.

  constructor() {
    // Gera um ID automaticamente se não existir.
    if (!this.id) {
      this.id = uuid();
    }
  }
}

// Torna a classe disponível para uso em outros arquivos.
export { Specification };
