
var set = new Set();

// Any reference or value type can be added
set.add('string val');
set.add(true);
set.add(new Date());
set.add(set);

// Check for a value with `has`
set.has('string val');

// Remove items by value
set.delete('string val');
set.has('string val');

// `keys()` and `values()` return same values
[...set.values()];

// Iterate with `forEach`
set.forEach((val) => console.log(val));

// Empty the set with `clear`
set.clear();
