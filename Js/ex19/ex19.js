const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let linhas = [];

var list = [
    { Cod: 1, Specification: 'Cachorro Quente', Price: 4.00 },
    { Cod: 2, Specification: 'X-Salada',        Price: 4.50 },
    { Cod: 3, Specification: 'X-Bacon',         Price: 5.00 },
    { Cod: 4, Specification: 'Torrada simples', Price: 2.00 },
    { Cod: 5, Specification: 'Refrigerante',    Price: 1.50 }
];
var X;
var Y;
rl.on('line', (input) => {
    linhas.push((input.split(' '))[0]);
    linhas.push((input.split(' '))[1]);
      X = Number(linhas[0]);
      Y =  Number(linhas[1]);
      rl.close(); 
    

let somaPrice = 0.00;
for (let cont = 1; cont <= Y; cont ++){
    for (pass of list){
        if(X == pass.Cod)somaPrice = Number(pass.Price) + somaPrice;
    }
    
}
console.log("Total: R$ " + parseFloat(somaPrice).toFixed(2) );
   
});