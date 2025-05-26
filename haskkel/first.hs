potencia :: Integer -> Integer -> Integer
potencia x y 
  | y >= 1 = x * potencia x (y-1)
  | y == 0 = 1
