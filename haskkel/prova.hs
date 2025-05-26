repeteAux :: Int -> Int -> [Int]
repeteAux 0 _ = []
repeteAux x y = [y] ++ repeteAux (x-1) y

repete :: Int -> [Int] -> [Int]
repete _ [] = []
repete x (a:s) = repeteAux x a ++ repete x s  
