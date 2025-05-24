import fs from "fs";
import csv from "csv-parse";

class ImportCategoryUseCase {
  execute(file: any) {
    const stream = fs.createReadStream(file.path);
    const parseFile = csv.parse();
    stream.pipe(parseFile);
    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}
export { ImportCategoryUseCase };
