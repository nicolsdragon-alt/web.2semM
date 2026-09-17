/*Tipos de variáveis
var -> escopo global
let -> escopo local
const -> escopo flex, valor será o mesmo até o fim do programa
*/

/*Criando variável*/

    /*
espremedor (fruta){
    suco
}
*/
/*funcao*/
function eTriangulo(l1,l2,l3) {
    return (l1 > 0 && l2 > 0 && l3 > 0) &&
           ( l1 + l2 > l3)&&
           (l1 + l3 > l2)&&
           (l2 + l3 > l1);
}
var ladoum = Number(prompt("Qual o valor do lado 1?"));
var ladodois = Number(prompt("Qual o valor do lado 2?"));
var ladotres = Number(prompt("Qual o valor do lado 3?"));

var tri = eTriangulo(ladoum,ladodois,ladotres);
if(tri) {
    alert("os valores formam um triangulo valido")
}else{
    alert("os valores Não formam um triangulo valido")
}

