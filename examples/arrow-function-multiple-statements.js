
// If your function has multiple statements then you'll need curly
// brakets and an explicit return
var identityLogger = (val) => {
	console.log(val);
	return val;
};

identityLogger(42);
