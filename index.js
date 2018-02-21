const game = document.querySelector('#game');
let current = 'X';
var board = [['', '', ''], ['', '', ''], ['', '', '']];

game.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI' && event.target.innerHTML === '') {
    event.target.innerHTML = current;
    event.target.style.verticalAlign = "middle";
    let ans = gameLogic();
    if (ans) {

    } else {
      switchPlayer();
    }
  }
});


const gameLogic = () => {

};



const switchPlayer = () => {
  if (current === 'X') {
    current = 'O';
  } else {
    current = 'X';
  }
};
