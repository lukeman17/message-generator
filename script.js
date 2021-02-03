
const Randomize = () => { 
// messages and numbers
let messages = ['Success is a lousy teacher. It seduces smart people into thinking they can\'t- Bill Gates', 
'Your time is limited, so don\'t waste it living someone else\'s life- Steve Jobs', 
'Be humble in victory or defeat- Conor McGregor', 'I like criticism. It makes me stronger- LeBron James', ]; 
let numbers = [1,2,3,4,5,6,7,8,9];

// make my message and numbers random.
let randomMsg = Math.floor(Math.random() * messages.length); 
let randomNum = Math.floor(Math.random() * numbers.length);

//outputs the random end result to the console 
let output = []; output.push('Your motivational quote is: ' + messages[randomMsg] + ' and your number is: ' + numbers[randomNum]); 
return output };

console.log(Randomize());