incrementar([], []).
incrementar([X|Rest], [Incremented|Incrementada]):-  
Incremented is X + 1,
incrementar(Rest, Incrementada).
