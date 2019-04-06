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
