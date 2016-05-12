
// math.js
export function sum (x, y) { return x + y };
export var pi = 3.141593;

// someFile.js
import * as math from "./math";
console.log("2π = " + math.sum(math.pi, math.pi));

// someOtherFile.js
import { sum, pi } from "./math";
console.log("2π = " + sum(pi, pi));
