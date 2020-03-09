const invertPrint = function(printArg) {
  let printValue = "";
  for (let i = printArg.length - 1; i >= 0; i--) {
    printValue += printArg[i];
  }
  console.log(printValue);
};

invertPrint("Hello World");
