
var a = 'A', b = 'B';

// Without destructuring requires extra var
var c = a;
a = b;
b = c;

// With descructuring it's like magic
[a, b] = [b, a];
