document.querySelector('button').addEventListener('click', function () {
  let event = this.window;
  var NewItem = document.createElement("LI");
   var textnode = document.createTextNode("wateR");
    NewItem.appendChild(textnode);
    document.querySelector('ul').insertBefore(NewItem, document.querySelector('ul').childNodes[0])
    console.log("works!!!");
});
