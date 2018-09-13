//Easy Going: Write a for loop that will log the numbers 1 through 20.
/*for(i = 1; i <= 20; i++) {
	console.log(i);
}*/

//Get Even: Write a for loop that will log only the even numbers in 0 through 200.
/*for(i = 0; i <= 200; i+=2) {
	console.log(i);
}*/

//Excited Kitten: Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
/*for(i = 1; i <= 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
	if(i % 2 === 0) {
		let rand = Math.random();
		if(rand <= 0.33) {
			console.log("...human...why you taking pictures of me?...");
		} else if(rand <= 0.67) {
			console.log("...the catnip made me do it...");
		} else {
			console.log("...why does the red dot always get away...");
		}
	}
}*/

//Fizz Buzz: Write a javascript application that logs all numbers from 1 - 100.
//If a number is divisible by 3 log "Fizz" instead of the number.
//If a number is divisible by 5 log "Buzz" instead of the number.
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
/*for(i = 1; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if(i % 3 === 0) {
		console.log("Fizz");
	} else if(i % 5 === 0) {
		console.log("Buzz");
	} else console.log(i);
}*/

//Getting to Know You--make a bunch of changes to some arrays
/*const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1] += 1;
ryan[2] = "Gotham";
reuben.pop();
reuben.push("Chicago");
jim.pop();
jim.push("Santiago","Singapore","Reykjavik");
jim.splice(2,1);*/

//Yell at the Ninja Turtles--play with cases in an array
//All uppercase
/*const ninjaTurtles = ["Donatello","Leonardo","Raphael","Michaelangelo"];
for(i = 0; i < ninjaTurtles.length; i++) {
	console.log(ninjaTurtles[i].toUpperCase());
}

//Alternating case
const alternateCase = function(s) {
	const chars = s.toLowerCase().split("");
	for(let i = 0; i < chars.length; i+=2) {
		chars[i] = chars[i].toUpperCase();
	}
	return chars.join("");
}

for(i = 0; i < ninjaTurtles.length; i++) {
	console.log(alternateCase(ninjaTurtles[i]));
}*/

//Return of the Closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//Alien Attire
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

//Dress 'em Up
const outfit1 = "Outfit 1 consists of Kristyn's " + kristynsCloset[0] + ", " + kristynsCloset[2] + ", and " + kristynsCloset[3] + ".";

const outfit2 = "Outfit 2 consists of Thom's " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][0] + ".";

const outfit3 = "Outfit 3 consists of Thom's " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + ".";


//Dirty Laundry
for(i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

//Inventory
for(i = 0; i < thomsCloset.length; i++) {
	console.log(thomsCloset[i]);
}







