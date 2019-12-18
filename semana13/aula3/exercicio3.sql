use bruno;

-- ex1
select titulo, primeiro_nome, ultimo_nome
from livros l
join autores a
on l.autor_id = a.id
where ultimo_nome = "Brown";

-- ex2
select titulo, primeiro_nome, ultimo_nome
from livros l
join autores a
on l.autor_id = a.id
where a.primeiro_nome like "A%";

-- ex3
select count(*) as "nro de livros", primeiro_nome
from livros l
join autores a
on l.autor_id = a.id
group by a.primeiro_nome;

-- ex4
-- ainda não populei a tabela da entidade usuarios

-- ex5
-- ainda não populei a tabela da entidade usuarios

-- ex6 
select titulo, nome, data_fundacao
from editoras e
join livros l
on l.editora_id = e.id
where data_fundacao="1989-12-31";


