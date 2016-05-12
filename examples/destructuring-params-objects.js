
// Take an object, only use `host` and `port` properties
function test({ host, port }) {
	console.log('Host:', host);
	console.log('Port:', port);
}

var config = {
	name: 'test',
	host: 'localhost',
	port: 1337
};

test(config);
