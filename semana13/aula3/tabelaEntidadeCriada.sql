use bruno;

create table livros(
id int not null primary key unique,
titulo varchar(100) not null,
autor varchar(100) not null,
editora varchar(100) not null,
ano int not null
);

select * from livros;
describe livros;

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

alter table livros
add editora_id int not null;

alter table livros
add foreign key (editora_id)
references editoras(id);

alter table livros
add autor_id int not null,
add foreign key (autor_id)
references autores(id);


create table usuarios_livros(
usuario_id int not null,
livro_id int not null
);

alter table usuarios_livros
add foreign key (usuario_id) references usuarios(id);

alter table usuarios_livros
add foreign key (livro_id) references livros(id);

describe usuarios_livros;