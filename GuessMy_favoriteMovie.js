const  favmove = "Kick";
let guess = prompt("Enter Your guess:");
while((guess != favmove) && (guess != "quit")){
    // console.log("wrong");
    guess = prompt("Enter again");
}
if(guess==favmove){
    console.log("Congratulation You are Right:");

} else console.log("You loss game:");