import fs from 'fs';
import csv from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/interface/ICategoriesRepository';

interface IImportCategory {
  name: string;
  desc: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      console.log(
        'Class: ImportCategoryUseCase\nFunction: loadCategories\nFile Path: ' + file.path + '\n\n'
      );
      if (!fs.existsSync(file.path)) {
        return reject(new Error('File not found: ' + file.path));
      }

      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csv.parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', (line) => {
          const [name, desc] = line;

          categories.push({ name, desc });
        })
        .on('end', () => {
          console.log('Finished parsing, categories:\n\n');
          console.log(categories);
          console.log('\n\n\n');
          resolve(categories);
        })
        .on('error', (err) => {
          console.error('Parsing error:', err);
          reject(err);
        });
      stream.on('error', (err) => {
        console.error('Erro Stream: ', err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, desc } = category;
      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          desc,
        });
      }
    });
  }
}
export { ImportCategoryUseCase };
