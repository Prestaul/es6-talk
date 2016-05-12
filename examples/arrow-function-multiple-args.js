
// If your function takes more than one argument then you'll need
// parenthesis around the args
var sumReducer = (sum, val) => sum + val;
[1,2,3,4].reduce(sumReducer);

// Can still be used anywhere you used a function
[1,2,3,4].reduce( (sum, val) => sum + val );
