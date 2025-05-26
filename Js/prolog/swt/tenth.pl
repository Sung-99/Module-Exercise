generate(_,0,[]).
generate(X, X, [X]).
generate(X, Y, []):- X > Y.
generate(X, Y, [X|Rest]):- X =< Y, Next is X + 1, generate(Next, Y, Rest).

