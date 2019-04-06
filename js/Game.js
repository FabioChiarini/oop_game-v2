/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //Game class delaration
 class Game {

   constructor() {
     //track the number of missed guesses by the player
     this.missed = 0;
     //array of phrases to play
     this.phrases = [
       "Try one two three",
       "It is Game time",
       "Phrase number three",
       "Let s see if you can guess this",
       "last phrase to guess"
     ];
      //phrase object that  currently in play
      this.activePhrase = null;
   }

   //methods

   /*hides the start screen overlay, calls the getRandomPhrase() method,
   sets the activePhrase property with the chosen phrase
   and adds that phrase to the board*/
   startGame() {

   }

   //randomly retrieves one of the phrases stored in the phrases array and returns it
   getRandomPhrase() {
     let randomPhrase = Math.floor(Math.random() * this.phrases.length)
     return this.phrases[randomPhrase];
   }

   //controls what happens in the game
   handleInteraction () {

   }

   //remove a life from scoreboard if player misses a letter
   removeLife () {

   }

   //check if the player had guessed all the letters
   checkForWin() {

   }

   //check if player won or lose and display the screen overlay accordingly
   gameOver(){

   }




 }
