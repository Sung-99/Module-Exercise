nelementos([], 0).
nelementos([_|L], N) :- nelementos(L, N1), N is 1+N1.

soma([], 0).
soma([X|L], S) :- soma(L, S1), S is X+S1.

medio([],0).
medio([X|L],M) :- soma([X|L],S), nelementos([X|L], N), M is S/N.
