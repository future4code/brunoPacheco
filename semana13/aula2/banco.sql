use exercicios;
select* from correntistas;

-- ex1 - 323 ao total
select pais, conta_corrente
from correntistas
where (pais="Brazil") and (conta_corrente>3000);

-- ex2 483 ao total. adotado o ano comercial = 360
select primeiro_nome, aniversario, genero
from correntistas
where (genero = "F") and (datediff(curdate(), aniversario) >= 32/360);

-- ex3 total $1382084,57. adotado o ano comercial = 360
select sum(conta_corrente) as soma 
from correntistas
where (pais="Peru") and (datediff(curdate(), aniversario) >= 25/360);

-- ex4
select count(genero), pais 
from correntistas
group by pais;

-- ex5
select count(*) total,  aniversario
from correntistas
group by aniversario
order by total desc
limit 1;

-- ex6 adotado o ano comercial = 360
select avg((datediff(curdate(), aniversario))/360), pais 
from correntistas
group by pais;

-- ex7 
select primeiro_nome, ultimo_nome
from correntistas
where month(aniversario) = month(now());

-- ex8 A média do valor da conta corrente por país. 
select avg(conta_corrente) as "média conta corrente",lower(pais)
from correntistas
group by pais;

-- ex9
select count(*) total,  primeiro_nome
from correntistas
group by primeiro_nome
order by total desc
limit 3;