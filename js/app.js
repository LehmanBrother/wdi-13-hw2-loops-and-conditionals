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
const shahzad = ["Shahzad", 1000, "Austin"];
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
jim.splice(2,1);














