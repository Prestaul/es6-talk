
// math.js
export function sum(x, y) { return x + y };
export var pi = 3.141593;
export default { sum, pi };

// someFile.js
import math from "./math";
console.log("2π = " + math.sum(math.pi, math.pi));

// someOtherFile.js
import { sum, pi } from "./math";
console.log("2π = " + sum(pi, pi));
