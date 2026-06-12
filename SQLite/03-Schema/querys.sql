--database: ./db.sqlite

-- -----------------------------------------------------------------

-- 1. TIPOS DE DADOS

-- Tipos de outros SQL's
CREATE TABLE "produtos" (
    "id" INT,
    "descontinuado" TINYINT,
    "nome" VARCHAR(100),
    "preco" DECIMAL(10, 2),
    "descricao" TEXT,
    "data_criacao" DATETIME
);

INSERT INTO "produtos"
    (id, descontinuado, nome, preco, descricao, data_criacao)
VALUES
    (1, 0, 'Notebook', 2300.50, null, '10-06-2026');

-- Mostrando a Afinidade de Tipo --> TINYINT == INT
SELECT typeof("id") , typeof("descontinuado"), typeof("nome") FROM "produtos";


-- Todos os dados são tranformados automaticamente p o tipo padrão
INSERT INTO
    "produtos" ("id", "descontinuado", "nome", "preco", "descricao", "data_criacao")
VALUES
    ('1', '0', 999, '200.50', 100, 2049);

-- ** Exceto o DATATIME

SELECT typeof("data_criacao") FROM "produtos";
-- Observar que o campo "data_criacao" - DATATIME tem 2 tipos diferentes de dados que foram convertidos
-- será corrigido com o modo Strict



SELECT * FROM "produtos";

PRAGMA TABLE_INFO ('produtos');


-- DELETE FROM "produtos" WHERE "id" = 1;

-- DROP TABLE cursos;

-- -----------------------------------------------------------------

-- 2. STRICT

SELECT * FROM "cursos";

CREATE TABLE "cursos" (
    "id" INTEGER,
    "nome" TEXT,
    "preco" INTEGER
) STRICT;

INSERT INTO "cursos"
    ("id", "nome", "preco")
VALUES
    ('1', 'HTML', 1000);

-- SELECT typeof("id") FROM "cursos";

-- DELETE FROM cursos 

CREATE TABLE "cursos2" (
    "id" INTEGER,
    "nome" VARCHAR(1000),
    "preco" INTEGER
)STRICT;
-- ERRO

-- -----------------------------------------------------------------

-- 3. PRIMARY KEY

CREATE TABLE "cursos"(
    "id" INTEGER PRIMARY KEY,
    "nome" TEXT,
    "tipo" TEXT
    )STRICT;

INSERT INTO cursos
    ("nome", "tipo")
VALUES
    ('auto', 'Java');

-- NÃO POSSO inserir o mesmo dado em campos com PRIMARY KEY == erro

-- Se eu fizer um novo insert sem nenhum dados == como ele é único
--> Auto-incrementa o campo id com um novo número!!

-- -----------------------------------------------------------------

-- 4. FOREIGN KEY

