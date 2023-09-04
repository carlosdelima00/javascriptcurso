// Operadores logicos
// E == &
// OU == ||
// Não == !
/* tabela do E[v v=v,
    v f = f,
    f v = f
    f f = f
]
tabela do OU [
    v v = v,
    v f = v,
    f v = v,
    f f = f
]

*/
let vivo = false;
let idade = 17
console.log(!vivo || !idade==12 ?"adolescente":'')