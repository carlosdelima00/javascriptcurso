// condições
// if
// teste verdadeiro 
// sintaxe:
/* if(expressão logica){
    comandos
    if(aninhando)
}
else{
    bloco
} retorno logico falso

*/

let idade = Number(prompt("digite sua idade"))
if(idade >= 18){
    console.log("adulto")
    if(idade >= 60){
        console.log(" e idoso")
    }
}    
else if(idade > 11){
    console.log("adolescente ")
}
else{
    console.log("criança")
}


let senha = "@"
if(senha.length<8 ){
    console.log("senha invalida")
}
console.log("fim do programa")