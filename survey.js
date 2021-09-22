
let ans = '';
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? Nicknames are also acceptable :', (answer1) => {
  rl.question('What\'s an activity you like doing? :', (answer2) => {
    rl.question('What do you listen to while doing that? :', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) :', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? :', (answer5) => {
          rl.question('Which sport is your absolute favourite? :', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! :', (answer7) => {

              ans =  ans + answer1 + "likes to do " + answer2 + 
                     " and likes to listen " +answer3 + " while doing fav activity." 
                     + answer4+ " is his fav meal of day" + " and he prefers " + answer5 +
                     ". His absolute fav sport is " + answer6 + " He tell he has " + answer7 + ".";
                     console.log(`********************************`);
                     console.log(`The survey says ${ans}`);
              rl.close();
            });
          });
        });
      });
    });    
  });
});


