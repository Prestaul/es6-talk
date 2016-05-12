
// Previously we only had function scoped variables
function test() {
	var x = 42;
	if(true) {
		var x = 1337;
		console.log(x);
	}
	console.log(x);
}

test();

// With `let` this behaves more intuitively
