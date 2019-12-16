use exercicios;
describe funcionarios;

-- ex1 a 
select nome, salario, genero
from funcionarios 
where (genero = "M")and (salario >2000);

-- ex1 b
select nome, local_de_trabalho, data_contratacao
from funcionarios
where (local_de_trabalho="salao")and (data_contratacao >='2004-01-01');

-- ex1 c
select nome, data_nascimento 
from funcionarios 
where (nome like"%ei%");

-- ex1 d
select nome,data_nascimento, salario
from funcionarios 
where (data_de_nascimento>='2001-01-01') and (salario >= 1300);