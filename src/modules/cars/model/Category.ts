import { v4 as uuid } from 'uuid';
class Category {
  id?: string; //simbolo ?: significa que é opcional passar o paramentro
  name: string;
  desc: string;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Category };
