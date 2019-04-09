/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//initialize game variable
 let game;

/* assign id of buttons equals to their respective letter.
Have to do this otherwise i got some weird behaviour when
selecting letters on keyboard (some were not chosen but their were
disabled anyway)*/
for (var i = 0; i < $('.key').length; i += 1) {
  $('.key')[i].id = $('.key')[i].innerText;
  $('.key')[i].disabled = false;
}


//if user clicked the button, hide the overlay and display the game
 $('#btn__reset').click(function() {
   //select and hide overlay
   game = new Game();
   game.resetPage();
   $('#overlay').slideUp(500);
   game.startGame();
 });



let alphabet = new RegExp('[A-Za-z]');

$('body').on('click keypress', function(e) {
  //before firing a key, check if overlay is not visible
  if (!$('#overlay').is(':visible')){
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
        game.handleInteraction(String.fromCharCode(e.which).toLowerCase());
        }
      }
    }
  });
