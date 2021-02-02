// Inspirational messages
let messages= ['Success is a lousy teacher. It seduces smart people into thinking they can\'t- Bill Gates', 
'Your time is limited, so don\'t waste it living someone else\'s life- Steve Jobs','Be humble in victory or defeat- Conor McGregor', 'I like criticism. It makes me stronger- LeBron James',
 ];

// number of the day.
//const numb=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// randomizing the messages from messages array
 const randomGen = () =>{
    for(let i = 0; i < messages.length; i++){
    return messages[Math.floor(Math.random()* messages.length)]
   };
 
 };

randomGen();

console.log(randomGen())