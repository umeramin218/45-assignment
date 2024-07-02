// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianNames = ["Nabeel", 'Sajeel', 'Asif', 'Ali'];
function show_magicians() {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log("".concat(magicianNames[i]));
    }
    return;
}
show_magicians();
