
// Common task #4:
// We need to compute the value for a property and have to resort
// to using a method.

var obj = {
	first: 'Dr.',
	last: 'Jim',
	full: function() {
		return this.first + ' ' + this.last;
	}
};
console.log( obj, obj.full() );

// Now we have getters!
var obj = {
	first: 'Dr.',
	last: 'Jim',
	get full() {
		return this.first + ' ' + this.last + '!';
	}
};

obj;
