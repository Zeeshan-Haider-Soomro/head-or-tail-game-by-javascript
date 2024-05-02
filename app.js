// let userInput = prompt("enter head or tail").toLowerCase();

// let game = ["head", "tail"];

// method # 01

// let gen = Math.random() * game.length;

// let convert = Math.floor(gen);

// let result = game[convert]

// console.log(result);

// method # 02

// let gamePlus = game[Math.floor(Math.random()*game.length)]
// console.log(gamePlus);

// if(userInput === gamePlus){
//     Swal.fire("YOU WON")
// }
// else{
//     Swal.fire("YOU LOSE")
// }

function gamePlay() {
  let userInput = prompt("enter head or tail").toLowerCase();

  let game = ["head", "tail"];

  let gamePlus = game[Math.floor(Math.random() * game.length)];
  console.log(gamePlus);

  if (userInput === gamePlus) {
    Swal.fire("YOU WON");
  } else {
    Swal.fire("YOU LOSE");
  }
}
gamePlay();
