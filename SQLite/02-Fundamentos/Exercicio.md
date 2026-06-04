## SQLite Exercício
---
#### Crie as tabelas: produtos, clientes e compras.

- Nenhuma coluna da tabela pode ser nula.

- Defina o tipo de dado de cada coluna (INTEGER ou TEXT).

- A tabela produtos deve ter as colunas id, nome, preco

- A tabela clientes deve ter as colunas id, nome, email

- A tabela compras deve ter as colunas id, cliente_id, produto_id, data
<br>

---
 
### Insira os seguintes dados na tabela produtos:

- 1, Notebook, 1000
- 2, Smartphone, 500
- 3, Tablet, 300
<br>

###  Insira os seguintes dados na tabela clientes:

- 1, Maria, maria@email.com
- 2, João, joao@email.com
<br>

### Insira os seguintes dados na tabela compras:

- João comprou o Notebook no dia 2049-01-01
- Maria comprou o Smartphone no dia 2049-01-02
- João comprou o Tablet no dia 2049-01-03
<br>
<br>

---
- Selecione todos os dados da tabela produtos.

- Selecione apenas o nome de todos os produtos que custam mais que 400.

- Selecione todos os itens comprados por João.

## Solucao
---


```sql
CREATE TABLE "produtos" (
  "id" INTEGER NOT NULL,
  "nome" TEXT NOT NULL,
  "preco" INTEGER NOT NULL
);

CREATE TABLE "clientes" (
  "id" INTEGER NOT NULL,
  "nome" TEXT NOT NULL,
  "email" TEXT NOT NULL
);

CREATE TABLE "compras" (
  "id" INTEGER NOT NULL,
  "cliente_id" INTEGER NOT NULL,
  "produto_id" INTEGER NOT NULL,
  "data" TEXT NOT NULL
);

-- 2. Inserir dados em produtos
INSERT INTO
  "produtos" ("id", "nome", "preco")
VALUES
  (1, 'Notebook', 1000),
  (2, 'Smartphone', 500),
  (3, 'Tablet', 300);

-- 3. Inserir dados em clientes
INSERT INTO
  "clientes" ("id", "nome", "email")
VALUES
  (1, 'Maria', 'maria@email.com'),
  (2, 'João', 'joao@email.com');

-- 4. Inserir dados em compras
-- João = cliente_id 2, Maria = cliente_id 1
INSERT INTO
  "compras" ("id", "cliente_id", "produto_id", "data")
VALUES
  (1, 2, 1, '2049-01-01'),
  (2, 1, 2, '2049-01-02'),
  (3, 2, 3, '2049-01-03');

SELECT * FROM "produtos";

SELECT "nome" FROM "produtos" WHERE "preco" > 400;

-- ID de João é 2.
SELECT * FROM "compras" WHERE "cliente_id" = 2;
```

