var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

const fitLength = Number(lines.shift());
let indexFit = 0;
while (indexFit < fitLength) {
  const [item1, item2] = lines.shift().split(" ");
  if (item2.length > item1.length) {
    console.log("nao encaixa");
  } else {
    const fitCalc = item1.substring(item1.length - item2.length);

    if (fitCalc === item2) {
      console.log("encaixa");
    } else {
      console.log("nao encaixa");
    }
  }
  indexFit++;
}
