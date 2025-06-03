
export const isPangram = (phrase: string): boolean => {
    let set = new Set();
    let cont = 0;
      for (const char of phrase.toLowerCase()){
        if (char >= 'a' && char <= 'z') {
            set.add(char);
        }
    }
    return set.size === 26;
}