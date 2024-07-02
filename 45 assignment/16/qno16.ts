// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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
