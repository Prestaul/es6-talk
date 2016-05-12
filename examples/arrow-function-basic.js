
// Using a function expression can be verbose
[1,2,3,4].map( function(val) { return 2 * val; } );


// Now we have a shorthand!
[1,2,3,4].map( val => 2 * val );
// Left of the arrow is the argument
// Right of the arrow is returned
