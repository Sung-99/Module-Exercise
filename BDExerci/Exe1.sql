Create table DEPARTAMENTO ( 
      Numero number(5) primary key, 
      Nome varchar2(20) not null
); 
Insert into DEPARTAMENTO values (5,'Pesquisa'); 

Commit; 

Select * from DEPARTAMENTO; 

Create table FUNCIONARIO ( 
    CPF   varchar2(11) primary key, 
    Nome varchar2(100) not null, 
    Data_Nascimento date not null, 
    Numero_Departamento  number(5) not null references DEPARTAMENTO(Numero) 
); 

