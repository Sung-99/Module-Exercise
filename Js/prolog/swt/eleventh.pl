%soma([],0).
%soma([X|S], R):-soma(S, N1), R is X+N1.
%just with sum, i got it wrong

soma([],0).
soma([_|S], R):-soma(S, N1), R is 1+N1.

mul([], 1).
mul([X|S], R):-mul(S, N1), R is X*N1.


media([], 0).
media(L, R):-  mul(L, M) , soma(L, S), R is M/S.
