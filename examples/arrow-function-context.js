
// Previously we sometimes had to create a `self` var to maintain context
var obj = {
	prefix: 'Dr.',
	map(...names) {
		var self = this;
		return names.map(function(name) {
			return self.prefix + ' ' + name;
		});
	}
};

// Arrow functions bind context upon creation, not at call time
var obj = {
	prefix: 'Dr.',
	map(...names) {
		return names.map( name => this.prefix + ' ' + name );
	}
};

obj.map('Jim');
