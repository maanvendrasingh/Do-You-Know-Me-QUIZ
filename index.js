const readlineSync = require('readline-sync');
const chalk = require('chalk');

// global score initialise
var score = 0;

var userName = readlineSync.question(chalk.magenta('May I know your Name? '));

console.log('Welcome '+ chalk.bold.yellow(userName) + ' to HOW WELL DO YOU KNOW '+chalk.rgb(245, 98, 7)("Maan")+ " ?");
console.log();

// play function declaration
function play(question,answer){
	var entry = readlineSync.question(chalk.rgb(224, 255, 255)(question));
	if(entry.toLowerCase() === answer.toLowerCase()){
		console.log(chalk.green('Yes, you are right!'));
		score = score + 1;
	}else{
		console.log(chalk.bgYellow('Sorry, that is incorrect.'));
}};

// database for questions
var questions1 = [
	{
		question: `Where do I belong from? 
		a. Varanasi
		b. Pune
		c. Jabalpur
		d. Nainital\n`,
		answer: "a"
	},
	{
		question: `Which city did I first go in my Drop Year? 
		a. Kota
		b. Lucknow
		c. Delhi
		d. Kanpur\n`,
		answer: 'd'
	},
	{
		question: `What was my name before Maanvendra? 
		a. Betu
		b. Tanu
		c. Manu
		d. Tony Stark :P\n`,
		answer: 'b'
	},
	{
		question: `Where did I got Placed first? 
		a. Microsoft
		b. Amazon
		c. Infosys
		d. Fiserv\n`,
		answer: 'd'
	},
	{
		question: `What do I wish to be ? 
		a. Data Analyst
		b. IAS Officer
		c. Software Developer
		d. MultiMillionare\n`,
		answer: 'd'
	}
];
// advance database
questions2 = [
{
	question:`Which musical Instrument have I always wished to learn ?\n`,
	answer:'Guitar'
},
{
	question:`Which is my Favorite comic Universe ?\n`,
	answer:'Marvel'
},
{
	question:`Which Brand electronic gadgets I own the most?\n`,
	answer:'Xiaomi'
},
{
	question:`What is my dream destination(outside India)?\n`,
	answer:'Europe'
},
{
	question:`What is my Favorite Indian sweet?\n`,
	answer:'Gulab Jamun'
}
];

// This function will call run function
function serve() {
	console.log(chalk` {rgb(255, 212, 102) RULES of the Game:- }
{rgb(102, 184, 255) This is a small general Trivia about ME ! }
	There will be two rounds:
	  {green Beginner} and {redBright Advanced}.\n`);

	console.log(chalk` {rgb(102, 184, 255) Each will have 5 sets of questions.\n First round will be MCQ based.\nThe user will have to enter any one of the option letter.
		After completing round 1, user will advance to Round 2. 
		This round will be {underline.bold.white FILL the WORD}, user need to enter the word. If True, user will score a point.\nFor Each {green Correct answer}, user will get {bold 2} points. For each {red incorrect}, {gray null} will be rewarded.}`);
	console.log(chalk`{yellowBright Hope you enjoy it!}\n
	{inverse.rgb(12, 69, 110).bold  Let's BEGIN. . . }\n`);

	var value = readlineSync.question(chalk`press {bold.white e} for exit. Press any other key to continue...\t`);

	if( value.toLowerCase() === 'e' ){
			console.log(`you selected ${value}`);
		console.log('Thanks for playing!');
	}
	else{
	run();
	};
}


//  This function will call play function
function run(){
	var count = 0;
	while( count < (questions1.length  +  questions2.length )){
		if(count===0){
			console.log(`Welcome to Round 1!\n`)
			for(var i = 0; i < questions1.length;i++){
			var currentQuestion = questions1[i];
			play(currentQuestion.question,
			currentQuestion.answer);
			console.log(chalk`{magentaBright -------------}`);
			count++;
		}
		console.log(`You now Advance to Round 2...\n`)
	}else{
			console.clear();
			console.log(`Welcome to Round 2!\n`);
			for(var i = 0; i < questions2.length;i++){
			var currentQuestion = questions2[i];
			play(currentQuestion.question,
			currentQuestion.answer);
			console.log(chalk`{magentaBright -------------}`);
			count++;
			}
		}
	}
	console.log('Your Total score is '+ chalk.red(score));
	console.log('High Score: ');
	for(var i=0; i< dataBase.length; i++){
		var currentUser = dataBase[i];
		console.log(i+1, currentUser.name , currentUser.userScore);
	}
	console.log('Your Score: ');
	console.log(`${userName} ${chalk.bold.blue(score)}`);
};

// databases for high scores
var dataBase = [
{
	name: 'Maanvendra',
	userScore : 10
},
{
	name: 'Friend 1',
	userScore : 9
}
];

// main
serve();