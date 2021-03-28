const { getPriority } = require("os");

var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

var data = [];

lines.forEach((item) => {
  var numberList = item.split(" ").map((item) => Number(item));
  data.push(numberList);
});

var funcionarioList = [];
var testArray = [];
var clienteList = [];

for (i = 1; i <= data[0][0]; i++) {
  funcionarioList.push({
    id: i,
    time: data[1][i - 1],
  });
  testArray.push({
    id: i,
    time: data[1][i - 1],
  });
}

for (i = 1; i <= data[0][1]; i++) {
  clienteList.push({
    id: i,
    itens: data[2][i - 1],
  });
}

var totalTimePerFunc = [];
var totalTime = 0;

if (funcionarioList.length === clienteList.length) {
  funcionarioList.forEach((funcionario) => {
    totalTimePerFunc.push(
      funcionario.time * clienteList[funcionario.id - 1].itens
    );
  });

  totalTimePerFunc = totalTimePerFunc.sort(
    (item1, item2) => item2.time - item1.time
  );
  totalTime += totalTimePerFunc[0];
} else if (funcionarioList.length < clienteList.length) {
  funcionarioList = funcionarioList.sort(
    (item1, item2) => item1.time - item2.time
  );

  testArray = testArray.sort((item1, item2) => item1.id - item2.id);

  clienteList.forEach((cliente) => {
    if (testArray.length === 0) {
      totalTimePerFunc.push(cliente.itens * funcionarioList[0].time);
      var funcionarioOcupado = funcionarioList.shift();
      funcionarioList.push(funcionarioOcupado);
    } else {
      totalTimePerFunc.push(cliente.itens * testArray[0].time);
      testArray.shift();
    }
  });

  if (funcionarioList.length === 1) {
    totalTimePerFunc.forEach((time) => (totalTime += time));
  } else {
    var arrayToCalc = [];
    var repeatAs = Math.ceil(clienteList.length / funcionarioList.length);
    for (var i = 1; i <= repeatAs; i++) {
      totalTime += totalTimePerFunc
        .slice((i - 1) * funcionarioList.length, i * funcionarioList.length)
        .sort((item1, item2) => item2 - item1)[0];
    }
  }
} else {
  clienteList.forEach((cliente) => {
    totalTimePerFunc.push(cliente.itens * funcionarioList[cliente.id - 1].time);
  });
  totalTimePerFunc = totalTimePerFunc.sort(
    (item1, item2) => item2.time - item1.time
  );
  totalTime += totalTimePerFunc[0];
}

console.log(totalTime);
