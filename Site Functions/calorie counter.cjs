const prompt = require('prompt-sync')();

var counter = 0
var addedItems = []

still_counting = "yes"

while (still_counting == "yes"){
    current_item = prompt("What food item do you want to add?")
    current_calories = Number(prompt("How many calories does it have?"))
    still_counting = prompt("Do you want to keep counting? ('yes'/'no' only please)")
    counter = counter + current_calories
    addedItems.push(current_item)
    console.log("Current Food List")
    console.log(addedItems)
}

console.log("Total Calories:" + counter)

