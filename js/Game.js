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

   //randomly retrieves one of the phrases stored in the phrases array and returns it
   getRandomPhrase() {
     let random = Math.floor(Math.random() * this.phrases.length)
     return this.phrases[random];
   }


   /*Calls the getRandomPhrase() method,
   sets the activePhrase property with the chosen phrase
   and adds that phrase to the board*/
   startGame() {
     //use self to rember the object after a click is fired
     //let self = this;
     const randomPhrase = this.getRandomPhrase();
     //initialize and display hidden phrase
     const phrase = new Phrase(randomPhrase);
     phrase.addPhraseToDisplay();
     //store the value of the phrase for future use
     this.activePhrase = phrase;
    }


   //remove a life from scoreboard if player misses a letter
   removeLife () {
     //count the current remaining life
     let lifeLeft = $('[src="images/liveHeart.png"]').length;
     if (lifeLeft > 0) {
       $('[src="images/liveHeart.png"]:eq(0)').attr('src', "images/lostHeart.png");
     }
   }

   //check if the player had guessed all the letters
   checkForWin() {
     //get the total number of letters, minus the whitespaces
     let wordsLength = $('ul li').length-$('.space').length;
     //get total number of guessed letters
     let guessedLength = $('[value=guessed]').length;
     if (wordsLength === guessedLength) {
       return true;
     }
     else {
       return false;
     }
   }

   //check if player won or lose and display the screen overlay accordingly
   gameOver(checkWinLose){
     if (checkWinLose) {
        $('#game-over-message').text('CONGRATULATIONS, YOU WON!');
        $('#overlay').show();
     }
     else {
       $('#game-over-message').text('YOU LOST, TRY AGAIN!');
       $('#overlay').show();
     }
   }


   //controls what happens in the game
  handleInteraction (chosenLetter, activePhrase) {
    if (this.activePhrase.checkLetter(chosenLetter)) {
      console.log("working");
    }
  }



 }
