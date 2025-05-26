const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let linhas = [];
rl.on('line', (input) => {
    linhas.push((input.split(' '))[0]);
    
    if(linhas.length === 2){
        const Z = Number(linhas[0]);
        const Y = Number(linhas[1]);
        console.log('X = '+ (Z + Y));
        rl.close();
    }
  });

  