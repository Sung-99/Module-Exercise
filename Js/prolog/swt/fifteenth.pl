concatenar([], L, L).
concatenar([X|L1], L2, [X|L3]) :- concatenar(L1, L2, L3).

linearizar([],[]).
linearizar([X|Rest], Linearizada):-	 
linearizar(Rest, LinearizadaRest),
concatenar(X, LinearizadaRest, Linearizada). 
