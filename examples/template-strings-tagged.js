
var size = 'huge', feels = 'awesome';

function shout(parts, ...values) {
	return parts.reduce((result, part, i) => {
		return result + part + (values[i] || '').toUpperCase()
	}, '');
}

console.log(`This feature is ${feels}!\nIt's going to be ${size}!`);
console.log(String.raw`This feature is ${feels}!\nIt's going to be ${size}!`);
console.log(shout`This feature is ${feels}!\nIt's going to be ${size}!`);
