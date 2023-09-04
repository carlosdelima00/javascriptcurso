// criar dados que serão do dado numerico
'use strict'
let Numeros1 = parseInt(prompt("digite um numero:"));
let Numeros2 = parseInt(prompt("digite um numero:"));
const soma = (n,n2)=>{
    return n + n2
}
const subtracao = (n,n2)=>{
    return n - n2
}
console.log("1-para soma ");
console.log("2-para subtração");
var EscolhaAOp = prompt("digite 1 ou 2");
/* 
switch = escolha
escolha(Variavel){
    caso return:
        comand
    break;
}
*/
switch(EscolhaAOp){
    case '1':
        console.log(soma(Numeros1,Numeros2))
    break;
    case '2':
        console.log(subtracao(Numeros1,Numeros2))
    break;
    default:
        //        

}

