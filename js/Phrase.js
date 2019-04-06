/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Phrase class declaration
 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   //methods
   //adds letter placeholders to the display when the game starts
   addPhraseToDisplay() {
     //select the correct div
     let phraseContainer = $('#phrase ul')
     //split the string into single letters/spaces
     let letters = this.phrase.split("");

     //format and append each letter to the ul
     letters.forEach((letter) => {
       //check if letter is a white space
       if (letter !== ' ') {
         phraseContainer.append('<li class="hide letter ' + letter + '">' + letter + '</li>');
       }
       else {
         phraseContainer.append('<li class="space"> </li>');
       }
     });
   }

   //checks to see if the letter selected by the player matches a letter in the phrase
   checkLetter(letterToCheck) {
     if(this.phrase.split("").includes(letterToCheck)) {
       return true;
     }
     else {
       return false;
     }
   }


   //reveals the letter(s) on the board that matches the player's selection
   showMatchedLetter(letterToCheck) {
     if (this.checkLetter(letterToCheck)) {
       //count to select the correct li
       let count = 0;
       this.phrase.split("").forEach((letter) => {
         if (letter === letterToCheck) {
           //select the corresponding li
           $('ul li:eq('+count+')').removeClass().addClass('show letter ' + letter).attr('value', 'guessed');
         }
         count += 1;
       });
     }
   }
 }
