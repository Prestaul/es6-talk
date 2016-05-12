
// Take an array, only use the second and third entries
function test([, host, port]) {
	console.log('Host:', host);
	console.log('Port:', port);
}

var parsed = /([^:]+):(\d+)/.exec('localhost:1337');

console.log(parsed);

test(parsed);
