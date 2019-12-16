use exercicios;
describe correntistas;

-- ex3 a
select primeiro_nome,ultimo_nome, email, conta_corrente,pais
from correntistas
where (conta_corrente < 0) and (pais = "Brazil");

-- ex3 b;
select primeiro_nome, ultimo_nome, genero, pais, aniversario
from correntistas
where (pais = "Peru") or (aniversario="1990-01-01");

-- ex3 c
select primeiro_nome,ultimo_nome
from correntistas
where primeiro_nome like "A%";

-- ex3 d O nome e a data de nascimendo de todos os correntistas nascidos
-- depois do ano 2000 com mais do que 1000 reais na conta
select primeiro_nome,ultimo_nome,aniversario,conta_corrente
from correntistas
where (aniversario>"1990-12-31") and (conta_corrente>1000);


