--database: ./db.sqlite

CREATE TABLE "produtos" (
    id INTEGER NOT NULL,
    nome TEXT NOT NULL,
    preco INTEGER NOT NULL
    );

CREATE TABLE "clientes" ( 
    id INTEGER NOT NULL,
    nome TEXT NOT NULL,
    email TEXT NOT NULL
    );

CREATE TABLE "compras" (
    id INTEGER NOT NULL,
    cliente_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    data TEXT NOT NULL
    );

INSERT INTO "produtos"
    ("id", "nome", "preco")
VALUES
    (1, 'Notebook', 1000),
    (2, 'Smatphone', 500),
    (3, 'Tablet', 300);

INSERT INTO "clientes"
    ("id", "nome", "email")
VALUES
    (1, 'Maria', 'maria@gmail.com'),
    (2, 'João', 'joao@gmail.com'
    );

INSERT INTO "compras"
    ("id", "cliente_id", "produto_id", "data")
VALUES
    (1, 2, 1, '2049-01-01'),
    (2, 1, 2, '2049-01-02'),
    (3, 2, 3, '2049-01-03');

SELECT * FROM "produtos";
SELECT * FROM "clientes";
SELECT * FROM "compras";
-- atualizando


SELECT * FROM "produtos";

SELECT "nome" FROM "produtos" 
WHERE "preco" > 400;

SELECT * FROM "compras" 
WHERE "cliente_id" = 2;
