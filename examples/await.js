
function slowThing(delay) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('Doing the slow thing');
			resolve('your thing')
		}, delay || 2500);
	});
}

function test() {
	slowThing();
	console.log('After the slow thing');
}

test();
