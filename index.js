const cleanRoom = () => {
  return new Promise((res) => {
    res('Cleaned the room');
  });
}

const removeGarbage = (mes) => {
  return new Promise((res) => {
    res(`${mes} Removed garbage`);
  });
}

const winIcecream = (msg) => {
  return new Promise((res) => {
    res(`${msg} Won Icecream`);
  });
}

cleanRoom().then((res) => {
  removeGarbage(res).then((res) => {
    winIcecream(res).then((resP) => {
      console.log(`abcdefg  ${resP}`);
    });
  });
})