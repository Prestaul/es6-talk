
var map = new Map();

map.set('this', 'that');
map.set('theOther', 'as well');

// Used with maps you get a tuple
for(let item of map) console.log(item);

// Which works great with destructuring!
for(let [key, val] of map) console.log(key, val);
