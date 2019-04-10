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
       this.missed += 1;
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
        $('#overlay').removeClass().addClass('win');
        $('#overlay').fadeIn(2000);
     }
     else {
       $('#game-over-message').text('YOU LOST, TRY AGAIN!');
       $('#overlay').removeClass().addClass('lose');
       $('#overlay').fadeIn(2000);
     }
   }


   //controls what happens in the game
  handleInteraction (chosenLetter, activePhrase) {
    //check if letter has already been clicked
    if($('#'+chosenLetter).attr('class') === 'key') {
      //disable the button after it has been clicked
      $('#'+chosenLetter).disabled = true;
      //check if guessed letter is correct or not
      if (this.activePhrase.checkLetter(chosenLetter)) {
        $('#'+chosenLetter).removeClass("key").addClass("chosen");
        this.activePhrase.showMatchedLetter(chosenLetter);
        if (this.checkForWin()) {
          this.gameOver(true);
          }

      }
      else {
        $('#'+chosenLetter).removeClass("key").addClass("wrong");
        this.removeLife();
        if(this.missed > 4) {
          this.gameOver(false);
        }
      }
    }
  }

  resetPage() {
    //remove li element from phrase
    $('#phrase ul').empty();
    //Enable onscreen keyboard buttons and update each to use the `key` CSS class
    for (var i = 1; i <= $('#qwerty button').length; i += 1) {
      if ($('button:eq('+[i]+')').attr('class') === 'wrong') {
        $('button:eq('+[i]+')').removeClass("wrong").addClass("key");
        $('#qwerty:eq('+[i]+')').disabled = false;
      }
      else {
        $('button:eq('+[i]+')').removeClass("chosen").addClass("key");
        $('#qwerty:eq('+[i]+')').disabled = false;
      }
    }
    //Reset all of the heart images
    for(var k = 0; k < $('.tries').length; k += 1){
      $('img:eq(' + k + ')').attr('src', "images/liveHeart.png");
    }
    $('#qwerty').show();
  }




}
