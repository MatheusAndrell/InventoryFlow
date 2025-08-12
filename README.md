# 📦 InventoryFlow

Sistema de controle de estoque desenvolvido com **Laravel** (backend) e **Vue.js** (frontend).  
O projeto permite gerenciar produtos, fornecedores, categorias, controlar entradas e saídas de estoque e gerar relatórios.

---

## 🚀 Funcionalidades
- Autenticação e registro de usuários com **Laravel Sanctum**
- CRUD de **categorias**, **fornecedores** e **produtos**
- Registro de movimentações de estoque (**entrada** e **saída**)
- Relatórios de estoque e histórico de movimentações
- API RESTful protegida por token Bearer
- Frontend moderno com Vue.js

---

## 🛠 Tecnologias Utilizadas

### Backend
- [Laravel 11](https://laravel.com/)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)
- [PostgreSQL](https://www.postgresql.org/)

### Frontend
- [Vue.js 3](https://vuejs.org/)
- [Axios](https://axios-http.com/)

---

## 📂 Estrutura do Projeto
```
InventoryFlow/
├── backend/       # API Laravel
├── frontend/      # Aplicação Vue.js
└── README.md
```

---

## ⚙️ Configuração do Backend (Laravel)

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/inventoryflow.git
   cd inventoryflow/backend
   ```

2. **Instale as dependências**
   ```bash
   composer install
   ```

3. **Configure o arquivo `.env`**
   ```bash
   cp .env.example .env
   ```
   Edite as variáveis do banco de dados:
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=inventoryFlow
   DB_USERNAME=postgres
   DB_PASSWORD=senha
   ```

4. **Gere a chave da aplicação**
   ```bash
   php artisan key:generate
   ```

5. **Rode as migrations**
   ```bash
   php artisan migrate
   ```

6. **Inicie o servidor**
   ```bash
   php artisan serve
   ```

---

## ⚙️ Configuração do Frontend (Vue.js)

1. **Vá até a pasta do frontend**
   ```bash
   cd ../frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

---

## 🔑 Autenticação
O sistema usa **Laravel Sanctum** com tokens Bearer.  
Após o login, use o token retornado para acessar as rotas protegidas, incluindo no header:

```
Authorization: Bearer SEU_TOKEN_AQUI
Accept: application/json
```

---

## 📌 Endpoints Principais

### Usuários
- `POST /api/register` — Registro de usuário
- `POST /api/login` — Login e obtenção do token

### Produtos
- `GET /api/products` — Listar produtos
- `POST /api/products` — Criar produto
- `PUT /api/products/{id}` — Atualizar produto
- `DELETE /api/products/{id}` — Excluir produto

### Movimentações de Estoque
- `GET /api/stock-movements` — Listar movimentações
- `POST /api/stock-movements` — Registrar movimentação

---

Desenvolvido por Matheus Andrell 🚀
