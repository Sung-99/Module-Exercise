retornarUltimo([X],X).
retornarUltimo([_|L],X):- retornarUltimo(L,X).
%easy
