rotacionan(_, [], []).
rotacionan(0, L, L).
rotacionan(X, [Y|Rest], Result):- Z is X - 1,
 concatenar(Rest, [Y], Result2),
 rotacionan(Z, Result2, Result).



concatenar([], L, L).
concatenar([X|L1], L2, [X|L3]) :- concatenar(L1, L2, L3).
