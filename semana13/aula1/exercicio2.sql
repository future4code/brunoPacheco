use bruno;
create table teste(
	primeiroCampo int);
    
create table funcionariosBruno(
	id int unique,
    nome varchar(100),
    salario int,
    local_de_trabalho varchar(150),
    genero varchar(1),
    data_nascimento datetime,
    data_contratacao datetime
);

describe funcionariosBruno;

insert into funcionariosBruno (id,nome,salario,local_de_trabalho,genero,data_nascimento,data_contratacao)
value (1,"bruno",1300,"biblioteca","m","1990-08-21","2008-01-05")