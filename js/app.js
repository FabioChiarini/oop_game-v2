/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//initialize game variable
 let game;

//if user clicked the button, hide the overlay and display the game
 $('#btn__reset').click(function() {
   //select and hide overlay
   $('#overlay').hide();
   game = new Game();
   game.startGame()
 });


 /*
  let alphabet = new RegExp('[A-Za-z]');

  $('body').click(function(e) {
    check that user is actually pressing a key button
    and not a space in between the qwerty keyboard
    if(e.target.className === 'key') {
      game.handleInteraction(e.target.innerText);
    }
  });


  $('body').keypress(function(e) {
    if (alphabet.test(String.fromCharCode(e.which))) {
      game.handleInteraction(String.fromCharCode(e.which));
    }
    else {
      e.preventDefault();;
    }
  });
*/

let alphabet = new RegExp('[A-Za-z]');

$('body').on('click keypress', function(e) {
  if (e.type == 'click' ) {
    if(e.target.className === 'key') {
      game.handleInteraction(e.target.innerText);
      /* remove focus on last key pressed, otherwise it gives problems
      pressing the spacebar becuase it fires again the event */
      e.target.blur();
    }
  }
  else {
    if (alphabet.test(String.fromCharCode(e.which))) {
      game.handleInteraction(String.fromCharCode(e.which));
    }
  }
});
