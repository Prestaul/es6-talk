
// Array.from(arguments) is probably clearer than [...arguments]
function test() {
    console.log(arguments);
    console.log(Array.from(arguments));
}

test(1,2,3);
