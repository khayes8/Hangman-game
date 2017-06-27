
//This is my wordbank of guesses
var wordbank = ['Khaleesi', 'Tyrion', 'Ygritte', 'Gendry', 'Gilly', 'Missandei', 'Jojen', 'Meera', 'Ilyn', 'Gregor', 'Cersei', 'Sansa', 'Arya'];
{console.log("wordbank");}

//This command randomly generates a word 
var choice = wordbank[Math.floor(Math.random()*wordbank.length)];
{console.log("choice");}

//This command keeps track of how many words have not been guessed
var available = wordbank.length;
{console.log("available");}

//This command alerts the user of the random word chosen
alert('The computer chose:' + choice);


function init( )
{
  if ( available <1 )

    alert("There are no words left to guess")
    


}


