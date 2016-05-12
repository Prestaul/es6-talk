
var obj = {
	foo: 'bar',
	boo: 'far'
};

console.log({
	something: 'here',
	// Expand properties of obj into this object
	...obj
});

// Same as:
// _.extend({ something:'here' }, obj)
// or
// Object.assign({ something:'here' }, obj)
