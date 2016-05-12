
// Provide defaults when defining function arguments
function test(foo = 'bar', count = 0) {
	// Same as:
	// if(foo === undefined) foo = 'bar';
	// if(count === undefined) count = 0;
	console.log(foo, count);
}

test(undefined, 10);
