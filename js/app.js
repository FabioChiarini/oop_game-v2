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

//used to check if only alphabet letters are pressed
let alphabet = new RegExp('[A-Za-z]');

 $('#qwerty').bind('click', function(e) {
   /*check that user is actually pressing a key button
   and not a space in between the qwerty keyboard */
   if(e.target.className === 'key') {
     console.log(e.target.innerText);
   }
 });


 $('body').bind('keypress', function(e) {
   let key = e.which
   if (alphabet.test(String.fromCharCode(key))) {
     console.log(String.fromCharCode(key));
   }
   else {
     e.preventDefault();
     return false;
   }
 });
