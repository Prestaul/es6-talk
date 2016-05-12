
// Quickly grab matches from a regexp match
var [, foo, bar] = /(foo)\/(bar)/.exec("foo/bar");

console.log(foo, bar);
