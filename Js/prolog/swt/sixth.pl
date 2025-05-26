inserirfim(X,[],[X]).
inserirfim(X,[Y|L], [Y|L3]):- inserirfim(X,L,L3).
%GoodWay
