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
for(i = 1; i <= 20; i++) {
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
}