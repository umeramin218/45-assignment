var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ["Pakistan", "United kindom", "Canada", "Turkey", "Saudi arabia"];
console.log("Orginal list=".concat(place));
//Print your array in alphabetical order without modifying the actual list.
console.log("\n sorted List= ".concat(__spreadArray([], place, true).sort()));
//Show that your array is still in its original order by printing it.
console.log("\n Orginal list=".concat(place));
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n reverse order= ".concat(__spreadArray([], place, true).sort().reverse()));
// Show that your array is still in its original order by printing it again.
console.log("\n Orginal list=".concat(place));
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n reverse order list= ".concat(__spreadArray([], place, true).reverse()));
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Orginal list= ".concat(__spreadArray([], place, true).reverse().reverse()));
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n reverse order list= ".concat(__spreadArray([], place, true).sort()));
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n reverse alphabetical list= ".concat(__spreadArray([], place, true).reverse));
console.log(place);
