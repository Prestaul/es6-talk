
// Common task #5:
// We need to do some work when a property value is set and have
// to resort to using a method.

var obj = {
	setFull: function(name) {
		[this.first, this.last] = name.split(' ');
	}
};
obj.setFull('Barney Rubble');
console.log(obj);

// Now we have setters!
var obj = {
	set full(name) {
		[this.first, this.last] = name.split(' ');
	}
};

obj.full = 'Barney Rubble';
obj;
