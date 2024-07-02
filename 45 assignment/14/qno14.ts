// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guestList:string[]=["salman","umer","ehtisham","asad"];
console.log(`${guestList[0]},"you are invited for tonight dinner"`);
console.log(`${guestList[1]},"you are invited for tonight dinner"`);
console.log(`${guestList[2]},"you are invited for tonight dinner"`);
console.log(`${guestList[3]},"you are invited for tonight dinner"`);

// bby using loop

console.log(`\n .................. \n`);

for(let i=0; i<guestList.length; i++){
console.log(`${guestList[i]},"you are invited for tonight dinner"`);
}


