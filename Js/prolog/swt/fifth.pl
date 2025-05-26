list([],0).
list([X|L1],[Y|L]):- Y is X+1, list(L1,L).
%retorna os elementos da lista +1
