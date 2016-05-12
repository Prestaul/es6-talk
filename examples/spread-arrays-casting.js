
function test() {
	// No more Array.prototype.slice.call(arguments)
    var a = [...arguments];
    console.log(arguments);
    console.log(a);
}

test(1,2,3);
