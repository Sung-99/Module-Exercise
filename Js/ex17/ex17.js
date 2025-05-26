const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linhas = [];
rl.on('line', (linha) => {
    linhas.push(linha);
    
    if (linhas.length === 2) {
      countCorrectAnswers(linhas);
        rl.close();
    }
});

function countCorrectAnswers(answers) {
  let correctCount = 0;
  const numeros = answers[1].split('').map(Number);
  const escolha = parseInt(answers[0]);
  // Check each contestant's answer
  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] === escolha)  {
          correctCount++;
      }
  }
  
  console.log(correctCount);
}

