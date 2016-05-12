
const IMA_DB = {
	size: 'huge',
	feels: 'awesome'
};

async function slowLookup(key) {
	return IMA_DB[key];
}

async function lookup(parts, ...values) {
	values = await Promise.all(values.map(slowLookup));

	return parts.reduce((result, part, i) => {
		return result + part + (values[i] || '');
	}, '');
}

lookup`This feature is ${'feels'}!\nIt's going to be ${'size'}!`.then(console.log);
