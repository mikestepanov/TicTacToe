const game = document.querySelector('#game');
let current = 'X';

game.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {

    switchPlayer();
  }
});

const switchPlayer = () => {
  if (current === 'X') {
    current = 'O';
  } else {
    current = 'X';
  }
};
