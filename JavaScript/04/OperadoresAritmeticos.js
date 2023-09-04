/* 
"=" atribuir valor a variavel
"==" igualdade
"===" identico
"!=" diferente de
"!==" total diferença
"+" somar
"-" subtrair
"*" multiplicar
"/" dividir
"%" resto da divisão
"**" potencia
*/
let nomeI = "               carlos";
let nomeF = nomeI.trim();
let user = {
    nome:"carlos"
};
let Conferir = nomeF == user.nome;
console.log(Conferir?"acesso Permitido":"acesso negado");

let Soma = 5+5;
let Subtracao = 5-5;
let multiplicar = 5*5;
let Divisao = 5/5;
let RestoDaDiv = 5%5;
let potencia = 5**2
let RaizQuadrda = Math.sqrt(potencia);
console.log(Soma);
console.log(Subtracao);
console.log(multiplicar);
console.log(Divisao);
console.log(RestoDaDiv);
console.log(potencia);
console.log(RaizQuadrda);