
function slowNodeThing(callback) {
	// throw new Error('Nope nope nope');
	setTimeout(() => {
		if(Math.random() < 0.5) {
			callback(new Error('Something went wrong'));
		} else {
			callback(null, 'DATA!!!!');
		}
	}, 1000);
}

function promiseSlowNodeThing() {
	return new Promise((resolve, reject) => {
		slowNodeThing((err, data) => {
			if(err) return reject(err);
			resolve(data);
		});
	});
}

promiseSlowNodeThing().then(
	data => console.log('Yup', data),
	err => console.log('Nope', err)
);
