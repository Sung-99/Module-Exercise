compactar([],[]).
compactar([X|Rest], [[Count, X]|RemainingResult]):-
contar(X, Rest, Count, RestFinal),
compactar(RestFinal, RemainingResult).

contar(X, [], 1, []).
contar(X, [X|Rest], Count, RestFinal) :-  % Count occurrences of X
    contar(X, Rest, Count1, RestFinal),  % Recursively count
    Count is Count1 + 1.  % Increment count,
contar(X, [Y|Rest], 1, [Y|Rest]) :-  % Different element found
    X \= Y.  % Ensure X and Y are different
    
