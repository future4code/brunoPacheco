use bruno;

create table livros(
id int not null primary key unique,
titulo varchar(100) not null,
autor varchar(100) not null,
editora varchar(100) not null,
ano int not null
);

select * from livros;

create table autores(
id int not null primary key unique,
primeiro_nome varchar(100) not null,
ultimo_nome varchar(100) not null,
nacionalidade varchar(100) not null
);

select * from autores;

create table editoras(
id int not null primary key unique,
nome varchar(100) not null,
cidade varchar(100) not null,
data_fundacao date 
);

select * from editoras;

create table usuarios(
id int not null primary key unique,
primeiro_nome varchar(100) not null,
ultimo_nome varchar(100) not null,
nacionalidade varchar(100) not null,
data_nascimento date not null
);

select * from usuarios;