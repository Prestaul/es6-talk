
// Sometimes asynchronous loops have unexpected behavior because of
// the scope of a variable
function lateLogger(...things) {
	for(var i = 0; i < things.length; i++) {
		setTimeout(() => {
			console.log(things[i], i);
		}, 10);
	}
}

lateLogger('foo', 'bar', 'baz');
