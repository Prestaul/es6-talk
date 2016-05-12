
// Common task #1:
// We often need to create an object with property names
// that match existing variable names.

var foo = 'foo', bar = 'bar';

var obj = {
	foo: foo,
	bar: bar
};

// Now we have a shorthand
var obj = { foo, bar };

obj;
