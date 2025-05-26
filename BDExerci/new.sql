
create table Estudio
    (CodEstudio INT primary key NOT NULL,
    nome_Estudio varchar2(30) NOT NULL);
create table Filme
    (CodFilme INT primary key NOT NULL,
    Titulo varchar(10) NOT NULL,
    Diretor varchar(10) NOT NULL,
    Genero varchar(10) NOT NULL, 
    AnoProd varchar(10),
    CodEstudio INT NOT NULL,
    FOREIGN KEY (CodEstudio) REFERENCES Estudio(CodEstudio));
create table Ator
    (CodAtor INT primary key NOT NULL,
     Nome VARCHAR(20) not null);
create table Elenco
    (CodFilme INT  NOT NULL,
    CodAtor int NOT NULL,
    Salario int,
    FOREIGN KEY (CodFilme) REFERENCES Filme(CodFilme),
    FOREIGN KEY (CodAtor) REFERENCES Ator(CodAtor));         