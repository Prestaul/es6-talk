
// Common task #3:
// We often have to add properties after constructing the object
// if a property name is computed

var options = { key:'key', value:1337 };

var obj = {};
obj[ options.key ] = options.value;

// Now we have a shorthand
var obj = {
	[options.key]: options.value
};

obj;
