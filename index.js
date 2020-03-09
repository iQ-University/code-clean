document.querySelector('button').addEventListener('click', function () {
  let event = this.window;
  const newItem = document.createElement("li");
  const textNode = document.createTextNode("Water");
  newItem.appendChild(textNode);
  document.querySelector('ul').insertBefore(newItem, document.querySelector('ul').childNodes[0])
    console.log("works!!!");
});
