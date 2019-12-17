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

select * from correntistas;

insert into correntistas (id,primeiro_nome,ultimo_nome,email,genero, conta_corrente,pais,aniversario)
value(1,"Bruno","Pacheco", "bruno_spacheco@yahoo.com", "M", -18000,"Brazil","1990-08-21"),
(2,"Larissa","Gomes","larissa@gmail.com","F",100,"Peru","1998-05-15"),
(3,"Jorge","Jorazes","jorgito@gmail.com","M",1500,"China","2019-08-06"),
(4,"SofiaComPH","Souza", "sofia@gmail.com","F",-500,"England","2005-05-09"),
(5,"Ash","Ketchum","satoshi@gmail.com","M",90000,"Japain","2009-12-17");

