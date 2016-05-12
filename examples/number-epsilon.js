
// Floating point arithmetic sometimes gets crazy
console.log(0.1 + 0.2 == 0.3);


// Number.EPSILON is a tiny number that can be used to bypass that craziness
function isSameNumber(a, b) {
	return Math.abs(a - b) < Number.EPSILON;
}

console.log(isSameNumber(0.1 + 0.2, 0.3));
