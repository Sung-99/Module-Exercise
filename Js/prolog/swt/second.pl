soma([], 0).
soma([X| L], S) :-soma(L, S1), S is X+S1.
