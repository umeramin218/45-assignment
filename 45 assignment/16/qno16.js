var guestList = ['umer', 'asad', 'salman'];
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", you are invited for tonight dinner"));
}
// console.log(`${guestList[0]}, you are invited for tonight dinner`);
// console.log(`${guestList[1]}, you are invited for tonight dinner`);
// console.log(`${guestList[2]}, you are invited for tonught dinner`);
console.log("\n Mr ".concat(guestList[1], " could not make it \n"));
guestList.splice(1, 1, "ali");
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", you are invited for tonight dinner"));
}
// console.log(`${guestList[0]}, you are invited for tonight dinner`);
// console.log(`${guestList[1]}, you are invited for tonight dinner`);
// console.log(`${guestList[2]}, you are invited for tonight dinner`);
console.log("\nI found a bigger tyable, So i would like to uinviote three more guests\n");
guestList.push("baber");
guestList.unshift("rizwan");
guestList.splice(2, 0, "azaf");
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", you are invited for tonight dinner"));
}
// console.log(`${guestList[0]}, you are invited for tonight dinner`);
// console.log(`${guestList[1]}, you are invited for tonight dinner`);
// console.log(`${guestList[2]}, you are invited for tonight dinner`);
// console.log(`${guestList[3]}, you are invited for tonight dinner`);
// console.log(`${guestList[4]}, you are invited for tonight dinner`);
// console.log(`${guestList[5]}, you are invited for tonight dinner`);
