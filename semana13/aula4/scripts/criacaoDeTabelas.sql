use bruno;

create table userTasks(
	id int unique not null auto_increment primary key,
    nome varchar(100) not null,
    nickname varchar(100) not null unique,
    email varchar(100) not null unique,
    date_birth date not null
);

describe userTasks;

create table tasks(
	id int unique not null auto_increment primary key,
	end_date date not null,
    nickname varchar(255) not null unique,
    id_user_created int not null ,
    id_user_responsible int ,
    foreign key (id_user_created) 
    references userTasks(id),
    foreign key (id_user_responsible)
    references userTasks(id)
);

describe tasks;
