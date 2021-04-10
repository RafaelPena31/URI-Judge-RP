var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

let data = [];
let winner;
let power = 0;
let killed = 0;
let deaded = 0;
let lengthName = "";

for (let i = 0; i < lines.length; i++) {
  let numberList = lines[i].split(" ");
  data.push(numberList);
}

for (let i = 1; i < data.length; i++) {
  let godArray = data[i];
  if (power < Number(godArray[1])) {
    power = Number(godArray[1]);
    killed = Number(godArray[2]);
    deaded = Number(godArray[3]);
    lengthName = godArray[0];
    winner = godArray[0];
  } else if (power == Number(godArray[1])) {
    if (killed < Number(godArray[2])) {
      killed = Number(godArray[2]);
      deaded = Number(godArray[3]);
      lengthName = godArray[0];
      winner = godArray[0];
    } else if (killed == Number(godArray[2])) {
      if (deaded > Number(godArray[3])) {
        deaded = Number(godArray[3]);
        lengthName = godArray[0];
        winner = godArray[0];
      } else if (deaded == Number(godArray[3])) {
        if (lengthName > godArray[0]) {
          winner = godArray[0];
        }
      }
    }
  }
}

console.log(winner);
