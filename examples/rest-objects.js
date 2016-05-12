
var obj = {
	foo: 'bar',
	boo: 'far',
	baz: 'bat'
};

// Collect remaining props into an `others` object
var { foo, ...others } = obj;

console.log(foo, others);
