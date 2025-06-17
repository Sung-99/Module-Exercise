export const duplicateCount = (phrase: string): number => {
    let setA = new Set<string>();
     let setB = new Set<string>();
    let cont = 0;
      for (const char of phrase.toLowerCase()){
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            if (setA.has(char)) {
                setB.add(char);
            }

            setA.add(char);
        }
    }
    return setB.size;
}
