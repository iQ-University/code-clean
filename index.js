let cleanRoom = () => new Promise(resolve => resolve('Cleaned the room,'));

let removeGarbage = message => new Promise(resolve => resolve(`${message} Removed garbage,`));

let winIcecream = message => new Promise(resolve => resolve(`${message} Won Icecream`));


cleanRoom()
.then(removeGarbage)
.then(winIcecream)
.then(resolvedTasks => console.log('Completed tasks: ', resolvedTasks));