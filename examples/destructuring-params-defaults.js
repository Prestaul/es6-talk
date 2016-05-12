
// Take an object, only use `host` and `port` properties, with defaults
function test({ host = 'localhost', port = 3000 }) {
	console.log('Host:', host);
	console.log('Port:', port);
}

var config = {
	name: 'test',
	port: 1337
};

test(config);
