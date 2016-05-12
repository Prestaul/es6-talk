
// Collect any params after the first two in the `others` array
function test( first, second, ...others ) {
	// No more `var others = Array.prototype.slice.call(arguments, 2)`
	console.log(first, second, others);
}

test(1,2,3,4,5);
