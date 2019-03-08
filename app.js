'use strict';

// Variable used to count the number of correct answers
var correctCounter = 0;
console.log('the user has ' + correctCounter + ' points');
// Asks for the users name

  var userName = prompt('Before we start, what is your name?');
  console.log('The users name is ' + userName);




// Asks the user a question with a prompt
var country_fn = function (){
  var originCountry = prompt('Is my country of origin Lithuania?');

  // Converts the answer to all lower case charecters
  originCountry = originCountry.toLowerCase();

  // My (correct) answer
  var originCountryAns = 'no';

  // Logs the correct answer and the user answer to console
  console.log('On the country question, the user answered ' + originCountry + ', the correct answer is ' + originCountryAns);


  // Checks if the answer is correct by comparing it to 'no' and 'n'
  // If not checks if the answer is wrong by comparing to 'yes' and 'y'
  // If neather is true, tells the user the correct way to answer
  if (originCountry === originCountryAns || originCountry === 'n'){
    alert('Correct! My country of origin is Latvia');
  return correctCounter++;
  }
  else if (originCountry === 'yes' || originCountry === 'y'){
    alert('Sorry, but that\'s wrong. The country is Latvia');
  }
  else{
    alert('Please answer in the form of Yes or No');
  }
}
country_fn();
console.log('the user has ' + correctCounter + ' points');








// Asks the user a question with a prompt
var country_fn = function (){

  var nationalCurrency = prompt('The currency used in Latvia is called the "Lat"');

  // Converts the answer to all lower case charecters
  nationalCurrency = nationalCurrency.toLowerCase();

  // My (correct) answer
  var nationalCurrencyAns = 'no';

  // Logs the correct answer and the user answer to console
  console.log('On the currency question, the user answered ' + nationalCurrency + ', the correct answer is ' + nationalCurrencyAns);


  // Checks if the answer is correct by comparing it to 'no' and 'n'
  // If not checks if the answer is wrong by comparing to 'yes' and 'y'
  // If neather is true, tells the user the correct way to answer
  if (nationalCurrency === nationalCurrencyAns || nationalCurrency === 'n'){
    alert('Correct! We switched to the Euro in 2014');
    return correctCounter++;
  }
  else if (nationalCurrency === 'yes' || nationalCurrency === 'y'){
    alert('Sorry, but that\'s wrong.  We switched to the Euro in 2014');
  }
  else{
    alert('Please answer in the form of Yes or No');
  }
}
country_fn ();
console.log('the user has ' + correctCounter + ' points');







// Asks the user a question with a prompt
var hair_fn = function (){
  var hairColor = prompt('Is my hair color black');

  // Converts the answer to all lower case charecters
  hairColor = hairColor.toLowerCase();

  // My (correct) answer
  var hairColorAns = 'no';

  // Logs the correct answer and the user answer to console
  console.log('On the hair color question, the user answered ' + hairColor + ', the correct answer is ' + hairColorAns);


  // Checks if the answer is correct by comparing it to 'no' and 'n'
  // If not checks if the answer is wrong by comparing to 'yes' and 'y'
  // If neather is true, tells the user the correct way to answer
  if (hairColor === hairColorAns || hairColor === 'n'){
    alert('Correct! My hair ir brown');
    return correctCounter++;
  }
  else if (hairColor === 'yes' || hairColor === 'y'){
    alert('Sorry, but that\'s wrong.  My hair is brown');
  }
  else{
    alert('Please answer in the form of Yes or No');
  }
}
hair_fn ();
console.log('the user has ' + correctCounter + ' points');







// Asks the user a question with a prompt
var sports_fn = function() {

  var sport = prompt('Is my favorite sport basketball?');

  // Converts the answer to all lower case charecters
  sport = sport.toLowerCase();

  // My (correct) answer
  var sportAns = 'yes';

  // Logs the correct answer and the user answer to console
  console.log('On the sport question, the user answered ' + sport + ', the correct answer is ' + sportAns);


  // Checks if the answer is correct by comparing it to 'yes' and 'y'
  // If not checks if the answer is wrong by comparing to 'no' and 'n'
  // If neather is true, tells the user the correct way to answer
  if (sport === sportAns || sport === 'y'){
    alert('Correct! I strarted when i was 10 years old');
    return correctCounter++;
  }
  else if (sport === 'no' || sport === 'n'){
    alert('Sorry, but that\'s wrong.  I\'ve played since 10 years old');
  }
  else{
    alert('Please answer in the form of Yes or No');
  }
}
sports_fn ();
console.log('the user has ' + correctCounter + ' points');







// Asks the user a question with a prompt
var console_fn = function (){


  var prefConsole = prompt('Do i preffer ps4 over xbox one?');

  // Converts the answer to all lower case charecters
  prefConsole = prefConsole.toLowerCase();

  // My (correct) answer
  var prefConsoleAns = 'yes';

  // Logs the correct answer and the user answer to console
  console.log('On the console question, the user answered ' + prefConsole + ', the correct answer is ' + prefConsoleAns);


  // Checks if the answer is correct by comparing it to 'yes' and 'y'
  // If not checks if the answer is wrong by comparing to 'no' and 'n'
  // If neather is true, tells the user the correct way to answer
  if (prefConsole === prefConsoleAns || prefConsole === 'y'){
    alert('Correct! I love my ps4');
    return correctCounter++;
  }
  else if (prefConsole === 'no' || prefConsole === 'n'){
    alert('Sorry, but that\'s wrong. I love my ps4');
  }
  else{
    alert('Please answer in the form of Yes or No');
  }
}
console_fn ();
console.log('the user has ' + correctCounter + ' points');


































// Promts the user with a question
var roommates_fn = function (){
  var guessNum = prompt('How many roommates do i currently live with?');


  // Converts users answer to an intiger
  guessNum = parseInt(guessNum);

  // My (Correct answer   )
  var guessNumAns = 6;


  // Checks if the number is correct
  // Checks if the number is high or low
  // If not correct gives user a total of 4 tries to get it right
  for(var i = 0; i <= 4; i++){
      if (guessNum === guessNumAns){
          console.log('In the number game, the user guessed ' + guessNum + ', the correct answer is ' + guessNumAns);
          alert('Correct');
         return correctCounter++;
          i = 4;
          
      } 
      else if (guessNum < guessNumAns){
          console.log('In the number game, the user guessed ' + guessNum + ', the correct answer is ' + guessNumAns);
          alert('You guessed too low');
          i++
          guessNum = prompt('How many roommates do i currently live with?');
      } 
      else if (guessNum > guessNumAns){
          console.log('In the number game, the user guessed ' + guessNum + ', the correct answer is ' + guessNumAns);
          alert('You guessed too high');
          i++
          guessNum = prompt('How many roommates do i currently live with?');
      }
  }
}
roommates_fn ();
console.log('the user has ' + correctCounter + ' points');























// Array of my correct answers
var brand_fn = function (){
  var brandsAns = ['supreme', 'louis vuitton', 'gucci', 'converse', 'off-white'];

  var questionCounter = 0;

  var wrong = true;




  // This code runs until the user has had six tries and guessed the wrong answer
  while (questionCounter < 6 && wrong === true){


      // Prompts a question to the user
      var brands = prompt('Name one of my favorite designer brands')


      // Checks if the user entered one of the correct answers
      // Congradulates user if he guessed correct
      for (var j = 0; j < brandsAns.length; j++){
          if (brands === brandsAns[j]){
              alert('Correct! These were the correct answers:  ' + brandsAns);
              console.log('In the cloathing question, the user chose ' + brands + ', which is correct')
              wrong = false;
              return correctCounter++;
              
          }
      }



      // If wrong, displays message and increments question counter
      if (wrong){
          alert('You were wrong!');
          console.log('In the cloathing question, the user chose ' + brands + ', which is incorrect')
          questionCounter++;
      }
  }
  




  // If all the tries are used up, display the answer to the user
  if (questionCounter === 6){
      alert('Sorry, you used up your tries! These were the correct answers:  ' + brandsAns);
  }
}
brand_fn ();
console.log('the user has ' + correctCounter + ' points');






var endmsg_fn = function (){

  if (correctCounter === 7){
      alert(userName + ', you got all 7 points! That\'s amazing')
  }
  else if (correctCounter > 4 && correctCounter < 7){
      alert('Well done ' + userName + ', you got ' + correctCounter + ' points!')
  }
  else {
      alert('You got ' + correctCounter + ' points ' + userName + ', Better luck next time')
  }
}
endmsg_fn ();