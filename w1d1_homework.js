// // Section 1
// // Terms
// // What is the difference between interpolation and concatenation? Give an example of each.

//Answer: Concatenation means joining two strings into one string, e.g: var hands = 2; console.log("I have " + hands + " hands."); Interpolation lets you use variables as part of your string text, e.g: var hands = 2; console.log(`I have ${hands} hands.`);

// // What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

// //  Section 2
// // Boolean expressions
// // ... and variable assignment

// // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// // Test your answers by using console.log in front of each expression in your answer file.

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a + b == c);
console.log(a * a ==d);
console.log(e == 'Kevin');
console.log(48 !== '48');

// Section 3
// While loops
// Increase your code literacy by reading code, line by line.

// Infinite loop?
// Read the following code very carefully.

// DO NOT RUN the code because it might run an infinite loop.

// Answer the following question:

// is this an infinite loop? Why or why not?
// You cannot test this code, so read it line by line and 'execute' the code in your head.

// while (true) {
// 	console.log('Do not run this loop');
// }
// Infinite or not infinite? Give it a good guess. It is 100% OK if you get it wrong (as long as you don't run the code). It's important to get into the habit of reading code.
//A: Yes, because the argument is always true and there's nothing in the actual loop that will change it to false.

// Infinite loop II
// is this loop an infinite loop? Why or why not?

// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
// Inifnite or not infinite? What is the expected output?
//Answer: No, because runProgram is declared true initially, but after running the loop once its value changes to false.

// Reading code
// Ok rest easy, no more infinite loops for now!

// The following while loop uses a compound assignment operator +=.

// If you need a refresher on what the compound assignment operator does, have a look back at the afternoon lesson.

// Without running this loop, what is the expected output?

// Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal. Be patient with your thought! There is no rush.

// let letters = "A";
// let i = 0;

// while (i < 20) {
// 	letters += "A";
// 	i++;
// }

// console.log(letters);
// After coming to a conclusion, run the code and write down whether it gave you the expected result. If not, how did it differ?
//Answer: AAAAAAAAAAAAAAAAAAAAA

// Section 4
// For loops
// Answer the following question:

// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//Answer: They can be used for the same purpose, but written in different ways.

// For loop I
// Write a for loop that will console.log the numbers 0 to 999.
for (i=0;i<100;i++){
	console.log(i);
}
// For loop control panel
// Here is an example for loop that prints a message 100 times:

// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? Each component is separated by a semicolon ;.

// Write your answers as comments in the file.

// The first part of the control panel is: declaration
// The second part of the control panel is: condition
// The third part of the control panel is: change
// For loop in reverse
// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (i=999; i>=0; i--){
	console.log(i);
}
// More counting
// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.

// The loop should run from 1 to 10.

// Expected Result:

// The value of i is: 1 of 10
// The value of i is: 2 of 10
// The value of i is: 3 of 10
// The value of i is: 4 of 10
// The value of i is: 5 of 10
// The value of i is: 6 of 10
// The value of i is: 7 of 10
// The value of i is: 8 of 10
// The value of i is: 9 of 10
// The value of i is: 10 of 10
for (i=1; i<11; i++){
	console.log("The value of i is: " + i + " of 10");
}

// Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// Iterate over the StarWars array and print each element to the console.
for (i=0; i<StarWars.length; i++){
	console.log(StarWars[i]);
}

// Iterate over the StarWars array again and print each character's name as well as the value of i.

for (i=0; i<StarWars.length; i++){
	console.log(i + " is the array's index value for " + StarWars[i]);
}

// CHALLENGE

// Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// => Han, R2D2, Leia

for (i=0; i<StarWars.length; i+=2){
	console.log(StarWars[i]);
}

// Skip this challenge if you end up spending too much time on it.


// Section 5
// Terminal Practice
// Write the answer to each command at the bottom your your homework file. Write them as comments.

// Episode X: A New Terminal
// A long time ago in a unix environment far, far away, young Jedi padawans who knew only of desktop software were seduced by the dark side of the Force to enter… The Terminal.

// Follow the instructions below using all the console commands introduced in Fundamentals, class, or that you find on your own.

// Part I: Set the Scene
// Open the Terminal app

// Create a new directory on your desktop called "galaxy_far_far_away" and enter it.

// Create a directory called "death_star", and make the following files inside of it: "darth_vader.txt", "princess_leia.txt", "storm_trooper.txt"

// In "galaxy_far_far_away", make a directory named "tatooine" and create the following files in it: "luke.txt", "ben_kenobi.txt"

// Inside of "tatooine" make a directory called "millenium_falcon", and in it create: "han_solo.txt", "chewbaca.txt"


// Part II: mv - rename
// You can rename a file using the mv command.
// For example, rename file1.txt to file2.txt

// mv file1.txt file2.txt
// Rename "ben_kenobi.txt" to "obi_wan.txt".

// Part II: cp - copy
// You can copy a file from one location to another using the cp command.
// For example, copy file1.txt to its parent directory:

// cp file1.txt ..
// For example, copy file1.txt to a sibling directory:

// cp file1.txt ../some_directory
// For example, copy file1.txt to a child directory:

// cp file1.txt some_directory
// Copy "storm_trooper.txt" from "death_star" to "tatooine".

// Part IV: mv - move
// You can use the mv command to move files from one location to another.
// For example, move a file from its current location to the parent directory:

// mv file1.txt ..
// For example, move a file from its current location to a sibling directory:

// mv file1.txt ../some_directory
// For example, move a file from its current location to a child directory:

// mv file1.txt some_directory
// You can also move directories into other directories using the same syntax.

// Move "luke.txt" and "obi_wan.txt" to the "millenium_falcon".

// Move "millenium_falcon" out of "tatooine" and into "galaxy_far_far_away".

// Move "millenium_falcon" into "death_star".

// Move "princess_leia.txt" into the "millenium_falcon".


// Part V: rm - remove
// You can use rm to delete a file.

// For example, delete a file:

// rm file1.txt
// Delete "obi_wan.txt".

// Part VI: all together
// In "galaxy_far_far_away", make a directory called "yavin_4".

// Move the "millenium_falcon" out of the "death_star" and into "yavin_4".

// Make a directory in "yavin_4" called "x_wing".

// Move "princess_leia.txt" to "yavin_4" and "luke.txt" to "x_wing".

// Move the "millenium_falcon" and "x_wing" out of "yavin_4" and into "galaxy_far_far_away".

// In "death_star", create directories for "tie_fighter_1", "tie_fighter_2" and "tie_fighter_3".

// Move "darth_vader.txt" into "tie_fighter_1".

// Make a copy of "storm_trooper.txt" in both "tie_fighter_2" and "tie_fighter_3".

// Move all of the "tie_fighters" out of the "death_star" and into "galaxy_far_far_away".


// Part VII: rm -r - remove directories
// Be careful with this command

// Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

// This command will typically not ask you if you really want to delete. It will just delete . . .

// Remove "tie_fighters" 2 and 3.
// Part VIII:
// Touch a file in "x_wing" called "the_force.txt".

// Destroy the "death_star" and anyone inside of it.

// Return "x_wing" and the "millenium_falcon" to "yavin_4".

// Celebrate.


// Already feeling comfortable with these commands and want an extra challenge? Try doing the following:

// Try applying one command to multiple files at once.
// Try applying one command to all files in a single directory (where necessery)
// Try applying one command to all files that match a pattern.
// Find and use command line shortcuts.
// Try using a mix of absolute and relative paths.

//Answer:
// mkdir galaxy_far_far_away
// cd galaxy_far_far_away
// mkdir death_star
// cd death_star
// touch darth_vader.txt
// touch princess_leia.txt
// touch storm_trooper.txt
// cd ..
// mkdir tatooine
// cd tatooine
// touch luke.txt
// touch ben_kenobi.txt
// mkdir millenium_falcon
// cd millenium_falcon
// touch han_solo.txt
// touch chewbaca.txt
// cd ..
// mv ben_kenobi.txt obi_wan.txt
// mv luke.txt millenium_falcon
// mv obi_wan millenium_falcon
// mv millenium_falcon ..
// mv millenium_falcon death_star
// cd death_star
// mv princess_leia.txt millenium_falcon
// mv millenium_falcon ..
// cd ..
// mkdir yavin_4
// mv millenium_falcon yavin_4
// cd yavin_4
// mkdir x_wing
// cd millenium_falcon
// mv princess_leia.txt ..
// mv luke.txt ..
// cd ..
// mv luke.txt x_wing
// mv millenium_falcon ..
// mv x_wing ..
// cd ..
// cd death_star
// mkdir tie_fighter_1
// mkdir tie_fighter_2
// mkdir tie_fighter_3
// mv darth_vader.txt tie_fighter_1
// cp storm_trooper.txt tie_fighter_2
// cp storm_trooper.txt tie_fighter_3
// mv tie_fighter_1 ..
// mv tie_fighter_2 ..
// mv tie_fighter_3 ..
// cd ..
// rm -r tie_fighter_2 tie_fighter_3
// cd x_wing
// touch the_force.txt
// cd ..
// rm -r death_star
// mv x_wing yavin_4
// mv millenium_falcon yavin_4

// Section 6
// Readings & Videos
// Learning by Making Mistakes
// Read this article: http://www.psychotactics.com/art-retain-learning/

// Answer the questions
// What was your biggest takeaway from this article?

//Answer: Don't be afraid to try things and make mistakes. It's the hardest thing to do, but it will teach you the most and allow you to retain the information for a longer time.

// Get to know Slack
// Download the Slack application on your computer and log in (please use the Slack app for class an not the in-browser application): https://slack.com/

// Download the Slack application on your phone and log in (if you have a smartphone).

// Read this article: http://thenextweb.com/insider/2015/08/11/the-ultimate-guide-to-doing-anything-in-slack/#gref

// Watch this video: https://www.youtube.com/watch?v=gvJAcElFMUU

// Answer the questions
// Name two things that you just learned about Slack that you didn't know before.

//Answer: Editting/deleting your messages, and accessing commands by inputting /. /collapse to collapse all embedded messages if it gets difficult to see the content in a channel. And of course /shrug !

// Name one thing that you just learned about that you think would be useful for you to use in the Slack classroom. Why do you think it will be useful?

//Answer: The most useful thing would probably be posting code snippets into the chat, since it allows us to share our code and get direct feedback

// Section 7
// Set Up for Success
// Make sure that your correct first and last name are on Zoom so that we know who you are in class.
// Make sure that your correct first and last name are displaying in Slack.
// Add a real photo of yourself in Slack so that we can put a face to a name.
// Setup your work space so that you can be successful and so we can see your face in the camera! Today was day 1 and hopefully it gave you an opportunity to see if your workspace is going to cut it. Take a few minutes now to clean off your desk, rearrange your seat / camera, order a new piece of equiptment that you need, etc.