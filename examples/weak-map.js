// WeakMap

var cache = new Map();
function memoized( obj ) {
	var result = cache.get( obj );
	if( !result ) {
		result = costlyComputation( obj );
		cache.set( obj, result );
	}
	return result;
}

// Result: We now hold a reference to `obj` and we've created a memory leak



var cache = new WeakMap();
function memoized( obj ) {
	var result = cache.get( obj );
	if( !result ) {
		result = costlyComputation( obj );
		cache.set( obj, result );
	}
	return result;
}

// Result: No more memory leak.
// Caveats: We can't see the size of our map or enumerate the keys
