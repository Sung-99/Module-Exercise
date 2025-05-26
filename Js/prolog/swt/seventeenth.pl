remove(_, [], []).
remove(X, [Y|ListaRest], [Y|ListaSemX]):- X \= Y, 
remove(X, ListaRest, ListaSemX).
remove(X, [X|ListaRest], ListaSemX):- remove(X, ListaRest, ListaSemX).
