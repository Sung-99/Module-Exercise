substituir :: Int -> Int -> [Int] -> [Int]
substituir x y [] = []
substituir x y (a:z)
  | a == x = y : (substituir x y z)
  | otherwise = a : (substituir x y z) 
