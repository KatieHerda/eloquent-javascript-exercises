// Write a program that creates a string that represents a 8x8 chess board.
let board = "";
let size = 8;

for(let y = 0; y < size; y++) {
  for(let x = 0; x < size; x++) {
    if((x + y) % 2 === 0){
      board += " ";
    } else {
      board += "#";
    }
  }
  board += '\n';
};
console.log(board);