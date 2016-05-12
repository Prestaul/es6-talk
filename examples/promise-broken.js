
var getPromisedThing = () => Promise.resolve({ whoami:'the thing' })
function doThings(really) {
    if(!really) return null;

    return getPromisedThing();
}

// This works unless I pass `false`
doThings(true).then(
	result => console.log('Resolved!', result),
	err => console.log('Rejected!', err)
);
