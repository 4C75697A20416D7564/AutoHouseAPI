
# 🚗 AutoHouse

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

---

## 📦 Estrutura de Diretórios

```plaintext
📁 src
 ┣ 📂 modules
 ┃ ┗ 📂 cars
 ┃   ┣ 📦 model
 ┃   ┃ ┣ 📄 Category.ts
 ┃   ┃ ┗ 📄 Specification.ts
 ┃   ┣ 📦 repositories
 ┃   ┃ ┣ 📄 CategoriesRepository.ts
 ┃   ┃ ┣ 📄 ICategoriesRepository.ts
 ┃   ┃ ┣ 📄 ISpecificatiosRepository.ts
 ┃   ┃ ┗ 📄 SpecificatiosRepository.ts
 ┃   ┣ ⚙️ services
 ┃   ┃ ┗ 📄 CreateSpecificationService.ts
 ┃   ┗ 📦 useCases
 ┃     ┣ ➕ createCategory
 ┃     ┃ ┣ 📑 CreateCategoryController.ts
 ┃     ┃ ┣ 📘 CreateCategoryUseCase.ts
 ┃     ┃ ┗ 🏁 index.ts
 ┃     ┗ 📋 listCategories
 ┃       ┣ 📑 ListCategoriesController.ts
 ┃       ┣ 📘 ListCategoriesUseCase.ts
 ┃       ┗ 🏁 index.ts
 ┣ 🛣 router
 ┃ ┣ 📄 categories.routes.ts
 ┃ ┗ 📄 specifications.routes.ts
 ┗ 🖥 server.ts
```

---

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/4C75697A20416D7564/api_concecionaria.git

# Instale as dependências
npm install

# Rode o servidor em modo desenvolvimento
npm run dev

# Acesse no navegador
http://localhost:3333
```

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Para colaborar:

1. Faça um **fork** deste repositório.  
2. Crie uma branch para sua feature ou correção:  
   `git checkout -b minha-feature`  
3. Faça as alterações necessárias.  
4. Faça commit das suas alterações com mensagens claras.  
5. Envie sua branch: `git push origin minha-feature`  
6. Abra um Pull Request e explique suas mudanças.

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- TypeScript  
- Express  
- UUID (para geração de IDs únicos)  

---

## 📄 Licença

Licenciado sob a licença MIT.

---

## ✍️ Autor

Desenvolvido por **Hamud**  
[LinkedIn](https://www.linkedin.com/in/luiz-felipe-hamud) | [GitHub](https://github.com/4C75697A20416D7564/api_concecionaria.git)

---

## 💡 Status do Projeto

🚧 Em desenvolvimento 🚧
