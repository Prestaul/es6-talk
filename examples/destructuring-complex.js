
var obj = {
	foo: 'bar',
	boo: 'far',
	things: [ "boats", "bananas", "butterflies" ]
};

var { foo, things: [,,third] } = obj;

// Same as:
// var foo = obj.foo;
// var third = obj.things[2];

console.log(foo, third);
