
var map = new Map();

// Any reference or value type can be used as a key or a value
map.set('string', 'string key');
map.set(true, 'bool key');
map.set(map, 'self key');

// Check for a value with `has`
map.has('key');

// Retrieve values by key
map.get(true);
map.get(map);

// Remove items by key
map.delete(map);

// `keys()` and `values()` are iterators, not arrays
[...map.keys()];
[...map.values()];

// Iterate with `forEach`
map.forEach((key, val) => console.log(key, val));

// Empty a map with `clear`
map.clear();
