var v = "olá,eu sou uma variavel declarada com 'var' ";
let l = "olá,eu sou uma variavel declarada com 'let' ";
const c = 6;
console.log(`valor de var ${v}\n
valor de let ${l}\nvalor da constante: ${c} `);
// as variaveis em var são escopo global
// as variaveis em let são de escopo local
// const são constantes imutaveis
//mudar valor de v e l
v = 5;
l = v-1;
console.log("valor de 'v' alterado",v);
console.log("valor de 'l' alterado",l);

