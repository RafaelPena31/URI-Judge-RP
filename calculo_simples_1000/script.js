var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

var [code1, qtd1, valorUnit1] = lines.shift().split(" ");
var [code2, qtd2, valorUnit2] = lines.shift().split(" ");

var total1 = qtd1 * valorUnit1;
var total2 = qtd2 * valorUnit2;

var total = total1 + total2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
