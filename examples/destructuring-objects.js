
var obj = {
	foo: 'bar',
	boo: 'far'
};

var foo, boo;

// Pull `foo` and `boo` from `obj`
({ foo, boo } = obj);

// Same as:
// foo = obj.foo;
// bar = obj.bar;

console.log(foo, boo);
