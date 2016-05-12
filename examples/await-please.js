
var getThing = () => Promise.resolve({ whoami:'the thing', isRight:true });
var getRelatedThing = thing => Promise.resolve({ whoami:'the related thing', relation: thing });
var transformThing = thing => Object.assign(thing, { transformed:true });

function getTheThings() {
    return getThing().then(thing => {
    	if(!thing.isRight) throw new Error('Bad thing');

    	return getRelatedThing(thing).then(relatedThing => {
    		delete relatedThing.relation;
    		return transformThing(relatedThing);
    	});
    });
}

// This works unless I pass `false`
getTheThings().then(
	result => console.log('Resolved!', result),
	err => console.log('Rejected!', err)
);
