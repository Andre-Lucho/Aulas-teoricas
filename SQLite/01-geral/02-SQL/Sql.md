# SQL

## Banco de Dados

### DBMS (Database Management System) / SGDB

- SQL, MongoDB, Redis

### RDBMS (Relational Dabase Management System) / SGDBR

- SQLite, MySQL, PostgreSQL

## SQL
Structured Query Language. Linguagem de consulta estruturada.

- https://dl.acm.org/doi/pdf/10.1145/800296.811515

```sql
CREATE TABLE usuarios (id, nome, email);

INSERT INTO usuarios (id, nome, email)
VALUES (1, 'André', 'andre@origamid.coim');

SELECT * FROM usuarios;

```

## SQLite
https://sqlite.org/

- Não precisa configurar

- Rápido, simples e estável

- Instalado em mais de 1 trilhão de dispositivos

- 90% parecido com o outros SQL

## Outros SQL
#### Existem outras implementações do SQL. <br>Essas implementações dependem de uma configuração/instalação inicial de um serviço/servidor que será utilizado para ser conectado com o Back End.

- MySQL

- MariaDB

- PostgreSQL


## Observações sobre a linguagem:
---
#### 1. A Linguagem SQL não é Case Sensitive. porém segue-se um padrão, onde os comandos são escritos em Maiúsculo;
#### 2. Ela não exige identação; porém utilizando, dá uma melhor clareza na leitura e escrita (boa prática);