var guestList = ['umer', 'asad', 'salman'];
console.log("".concat(guestList[0], ", you are invited for tonight dinner"));
console.log("".concat(guestList[1], ", you are invited for tonight dinner"));
console.log("".concat(guestList[2], ", you are invited for tonught dinner"));
console.log("\n Mr ".concat(guestList[1], " could not make it \n"));
guestList.splice(1, 1, "ali");
console.log("".concat(guestList[0], ", you are invited for tonight dinner"));
console.log("".concat(guestList[1], ", you are invited for tonight dinner"));
console.log("".concat(guestList[2], ", you are invited for tonight\u00A0dinner"));
console.log("\nI found a bigger tyable, So i would like to uinviote three more guests\n");
guestList.push("baber");
guestList.unshift("rizwan");
guestList.splice(2, 0, "azaf");
console.log("".concat(guestList[0], ", you are invited for tonight dinner"));
console.log("".concat(guestList[1], ", you are invited for tonight dinner"));
console.log("".concat(guestList[2], ", you are invited for tonight dinner"));
console.log("".concat(guestList[3], ", you are invited for tonight dinner"));
console.log("".concat(guestList[4], ", you are invited for tonight dinner"));
console.log("".concat(guestList[5], ", you are invited for tonight\u00A0dinner"));
console.log("\n sorry i can invite only two people for dinner \n");
console.log("".concat(guestList[5], " ,Sorry i can't invite you to dinner"));
guestList.pop();
console.log("".concat(guestList[4], " ,Sorry i can't invite you to dinner"));
guestList.pop();
console.log("".concat(guestList[3], " ,Sorry i can't invite you to dinner"));
guestList.pop();
console.log("".concat(guestList[2], " ,Sorry i can't invite you to dinner"));
guestList.pop();
console.log("\n".concat(guestList[0], ", you are still invited"));
console.log("".concat(guestList[1], ", you are still invited"));
guestList.pop();
guestList.pop();
console.log(guestList);