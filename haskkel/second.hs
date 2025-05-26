soma :: [Int] -> Int
soma [] = 0
soma (a:x)
  | a `mod` 2 /= 0 = a + soma x
  | otherwise = soma x
