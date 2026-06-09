-- database: ./db.sqlite

CREATE TABLE usuarios (id, nome);
INSERT INTO usuarios (id, nome) VALUES (1, 'André');

CREATE TABLE cursos (id, curso);
INSERT INTO cursos (id, curso) VALUES (1, 'TypeScript');
INSERT INTO cursos (id, curso) VALUES (2, 'SQLite');


SELECT * FROM usuarios;

