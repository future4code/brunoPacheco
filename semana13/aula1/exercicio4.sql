use bruno;
create table correntistas (
id int unique not null,
primeiro_nome varchar(100) not null,
ultimo_nome varchar(100) not null,
email varchar(100) not null,
genero varchar(1) not null,
conta_corrente int not null,
pais varchar(50) not null,
aniversario date not null
);