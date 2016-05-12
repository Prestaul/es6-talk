
function getThingById(id) {
	// return Promise.reject(new Error('Failed on thing'));
	return Promise.resolve({ id, type:'Thing', value:Math.random() });
}

function getRelatedThing(value) {
	// throw new Error('Failed on related thing');
	return Promise.resolve({ value, type:'RelatedThing' });
}

getThingById(42).then( thing => {
	console.log('Before', thing);
	return thing;
	// return getRelatedThing(thing.value)
}).then(
	result => console.log('After', result),
	err => console.log("D'oh!", err)
);
