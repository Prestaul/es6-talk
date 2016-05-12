
function test(one, two, three, four) {
	console.log(one, two, three, four);
}

var things = [1,2,3,4];

// Expand the `things` array before passing as args
test(...things);

// No more `test.apply(null, things)`

// Works with constructors, so this:
// new Thing(...args)
// Not:
// new Thing(...args) not new (Function.prototype.bind.apply( Thing, [null].concat(args)))
