// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: string[] = ['umer', 'asad', 'salman'];
for (let i= 0; i < guestList.length; i++){
    console.log(`${guestList[i]}, you are invited for tonight dinner`);
}

console.log(`\n ${guestList[1]} could not make it \n`);


guestList.splice(1,1,"ali");
for (let i= 0; i < guestList.length; i++){
    console.log(`${guestList[i]}, you are invited for tonight dinner`);
}

console.log("\nI found a bigger tyable, So i would like to uinviote three more guests\n");

guestList.push("baber");
guestList.unshift("rizwan");
guestList.splice(2,0,"azaf")
for (let i= 0; i < guestList.length; i++){
    console.log(`${guestList[i]}, you are invited for tonight dinner`);
}

console.log("\n sorry i can invite only two people for dinner \n");

for(let i=guestList.length; i=guestList.length-2;i--){
    console.log(`${guestList[i],"you’re sorry you can’t invite them to dinner."}`);
    
}

console.log(`\n${guestList[0]}, you are still invited`);
console.log(`${guestList[1]}, you are still invited`);

guestList.pop();
guestList.pop();
console.log(guestList);
