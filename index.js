document.querySelector('button').addEventListener('click', function () {
  let newItem = document.createElement("li");
  let textnode = document.createTextNode("Here is you're water, Bob.");
  newItem.appendChild(textnode);
  document.querySelector('ul').insertBefore(newItem, document.querySelector('ul').childNodes[0])
  console.log("Bob received his water!!!");
});
