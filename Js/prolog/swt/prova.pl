penultimo(X, [X, _]).
penultimo(X, [_|Z]):- penultimo(X, Z).