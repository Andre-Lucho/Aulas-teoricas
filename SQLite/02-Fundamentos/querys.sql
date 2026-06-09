--database: ./db.sqlite

-- -----------------------------------------------------------------

-- 1. CREATE TABLE

CREATE TABLE exemplo2 (id, exemplo, outro);

DROP TABLE exemplo;
-- Excluir tabelas

CREATE TABLE exemplo (
    id INTEGER NOT NULL,
    nome TEXT NOT NULL,
    aulas INTEGER
);

PRAGMA table_info('exemplo');
-- ver configurações da tabela

-- -----------------------------------------------------------------

-- 2. INSERT

SELECT * FROM exemplo;
-- *: todos os dados

INSERT INTO "exemplo" 
    ("id", "nome", "aulas") 
VALUES 
(1, 'TypeScript', 50), (2, 'React', 60);
-- " " - identificador

INSERT INTO exemplo 
    (nome, aulas) 
VALUES 
    ('React', 70);
-- Erro de restrição == Constraints
-- as primeiras 2 colunas não devem ser NUll

-- -----------------------------------------------------------------

-- 3. DELETE

DELETE FROM exemplo;
-- Limpa a tabela

DELETE FROM exemplo WHERE id = 2;
DELETE FROM "exemplo" WHERE "nome" = 'TypeScript';

-- -----------------------------------------------------------------

-- 4. SELECT

INSERT INTO exemplo 
    (id, nome, aulas)
VALUES
    (2, 'TypeScript', 50), 
    (3, 'Java', 120), 
    (4, 'Spring Boot', 40);


SELECT * FROM exemplo;

SELECT id, nome FROM exemplo LIMIT 3;

SELECT "id", nome, aulas FROM "exemplo" WHERE id = 4;
-- ==
SELECT * FROM "exemplo" WHERE nome = 'Spring Boot';
SELECT * FROM "exemplo" WHERE id = 4;

SELECT * FROM exemplo WHERE id >= 2;
SELECT * FROM "exemplo" WHERE "id" != 2;

SELECT * FROM "exemplo" WHERE "id" = 2 OR "aulas" > 10;


-- -----------------------------------------------------------------

-- 4. UPDATE

UPDATE "exemplo" SET "nome" = 'React e JS' WHERE "id" = 1;

UPDATE "exemplo" SET "nome" = 'Java 25' WHERE "id" = 3;




