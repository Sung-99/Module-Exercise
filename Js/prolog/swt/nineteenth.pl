ordenar([], []).  % Base case: An empty list is already sorted

ordenar([X|ListaNordenada], ListaOrdenada) :-
    ordenar(ListaNordenada, ListaOrdenadaTemp),  % Sort the rest of the list
    inserir(X, ListaOrdenadaTemp, ListaOrdenada).  % Insert X into the sorted list

inserir(X, [], [X]).  % If the list is empty, insert X
inserir(X, [Y|Rest], [X,Y|Rest]) :-  % If X is less than or equal to Y, insert X at the front
    X =< Y.
inserir(X, [Y|Rest], [Y|ListaOrdenada]) :-  % Otherwise, keep Y and insert X in the rest
    X > Y,
    inserir(X, Rest, ListaOrdenada).
