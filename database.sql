CREATE DATABASE aniversariantes;

CREATE TABLE aniversariantes(
    id SERIAL PRIMARY KEY  
    nome VARCHAR(255) NOT NULL
    dia VARCHAR(2) NOT NULL,
    mes VARCHAR(2) NOT NULL
);

--informacao fake
INSERT INTO aniversariantes (nome, dia, mes) 
VALUES('caio','11','10');
