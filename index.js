document.querySelector('button').addEventListener('click', function () {
  const newItem = document.createElement('li');
  const textNode = document.createTextNode('Water');
  newItem.appendChild(textNode);
  document.querySelector('ul').insertBefore(newItem, document.querySelector('ul').childNodes[0])
});
