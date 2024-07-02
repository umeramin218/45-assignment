// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


function sandwich(...ingridients:string[]){
    console.log(`your order is ready included: ${ingridients.join(', ')}.`);
}

sandwich ("item1", "item2", "item3");
sandwich("item4", "item5", "item6");
sandwich("item7", "item8", "item9");
