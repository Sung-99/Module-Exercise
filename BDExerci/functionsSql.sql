--Now i will list an examples about functions using sql
--Take the abs number of users in a table, where the difference will return
--negative numbers(there is no non-existing humans)

select count(nome) as qtdPeople from dep; --Will count how many tuples(required in select) are in a table


select count(*) from -- here we learn a bit about aggregate statemtns
(SELECT nome        --where i just aggregate two selects 
  FROM dep
  WHERE idade = 20

 union -- this will be explaned later
  
  SELECT nome
  FROM depother
  WHERE idade = 20);