
// var'd variables get hoisted and can be referenced before the var statement
// let variables are not hoisted and cannot be referenced before the let
function test() {
	console.log(x); // ReferenceError
	let x = 1337;
}

test();
