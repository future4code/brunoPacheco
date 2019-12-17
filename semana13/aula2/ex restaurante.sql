use exercicios;

select * from funcionarios; 

-- ex1
select nome, salario
from funcionarios
order by salario desc
limit 5;

-- ex2
select avg(salario) as total, local_de_trabalho
from funcionarios
group by local_de_trabalho
order by total desc;

-- ex3
select count(id) "total de funcionários", local_de_trabalho, genero
from funcionarios 
group by local_de_trabalho, genero
order by local_de_trabalho desc;

-- ex4
select datediff(curdate(),data_contratacao),nome
from funcionarios
order by data_contratacao asc
limit 10;

select * from funcionarios;
