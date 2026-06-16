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

DROP TABLE cursos;

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

CREATE TABLE "cursos" (
    "id" INTEGER PRIMARY KEY,
    "nome" TEXT
) STRICT;

CREATE TABLE "aulas" (
    "id" INTEGER PRIMARY KEY,
    "curso_id" INTEGER,
    "nome_aula" TEXT,
    FOREIGN KEY ("curso_id") REFERENCES "cursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)STRICT;

INSERT INTO "cursos" 
    ("id", "nome")
VALUES
    (1, 'Java')
    ;

INSERT INTO "aulas" 
    (curso_id, "nome_aula")
VALUES
    (1, 'Java com Spring Boot'),
    (1, 'Java'),
    (1, 'TypeScript')
    ;


UPDATE "cursos" SET "id" = 2 WHERE "id" = 1;


SELECT * FROM cursos;

DROP TABLE cursos;

DELETE FROM "cursos" WHERE "id" = 1;


PRAGMA foreign_keys;

-- -----------------------------------------------------------------

-- 5. RESTRICOES

-- a) NOT NULL

CREATE TABLE "usuario" (
    "id" INTEGER PRIMARY KEY,
    "nome" TEXT NOT NULL
)STRICT;

INSERT INTO "usuario"
    ("nome", "email")
VALUES
    ('Andre', 'andre@gmail.com')
    ;

-- b) UNIQUE


CREATE TABLE "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "nome" TEXT NOT NULL
) STRICT;

-- -------------------------------------

-- b.1) UNIQUE para juncao de valores

CREATE TABLE "certificados" (
    "id" INTEGER PRIMARY KEY,
    "usuario_id" INTEGER NOT NULL,
    "curso_id" INTEGER NOT NULL,
    UNIQUE ("usuario_id", "curso_id")
    -- os dois valores juntos serão únicos
) STRICT;


INSERT INTO "certificados"
    ("usuario_id", "curso_id")
VALUES
    (2, 1);

-- -------------------------------------

-- c) COLLATE - NOCASE

CREATE TABLE "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL COLLATE NOCASE UNIQUE,
    "nome" TEXT NOT NULL
)STRICT;

INSERT INTO "usuario"
    ("nome", "email")
VALUES
    ('Andre', 'andre@gmail.com')
    ;

INSERT INTO "usuario"
    ("nome", "email")
VALUES
    ('Andre', 'Andre@gmail.com')
    ;

-- -------------------------------------

-- d) DEFAULT

CREATE TABLE "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL COLLATE NOCASE UNIQUE,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT "usuario",
    "criado_em" TEXT DEFAULT CURRENT_TIMESTAMP
    --  CURRENT_TIMESTAMP é uma função do SQLITE
)STRICT;

INSERT INTO "usuario"
    ("nome", "email")
VALUES
    ('Andre', 'Andre@gmail.com');

-- campos com DEFAULT já preenchidos

INSERT INTO "usuario"
    ("nome", "email", "tipo")
VALUES
    ('Daniel', 'Daniel@gmail.com', 'admin');


-- -------------------------------------

-- e) CHECK

CREATE TABLE "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE COLLATE NOCASE,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT "usuario" CHECK ("tipo" IN ('usuario', 'admin')),
    "criado_em" TEXT DEFAULT CURRENT_TIMESTAMP
)STRICT;

INSERT INTO "usuario"
    ("nome", "email", "tipo")
VALUES
    ('Daniel', 'Daniel@gmail.com', 'admin');

INSERT INTO "usuario"
    ("nome", "email", "tipo")
VALUES
    ('Andre2', 'andre2@gmail.com', 'administrador');
    -- erro em CHECK




SELECT * FROM usuario;


DROP TABLE certificados;
-- PRAGMA TABLE_INFO ('usuario');