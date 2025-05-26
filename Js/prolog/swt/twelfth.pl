soma(0, 0). 
soma(X, R):- R is X + 1.

gerar(X, Y, []):- X > Y.
gerar(X, Y, [X|Rest]):- X =< Y, soma(X, R), gerar(R, Y, Rest).
