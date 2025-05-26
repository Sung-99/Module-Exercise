maior([X],X).
maior([X|L1],M) :- maior(L1,AUX), X < AUX, M is AUX.
maior([X|L1],M) :- maior(L1,AUX), X >= AUX, M is X.
