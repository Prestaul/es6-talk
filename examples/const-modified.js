
const OBJ = {
	foo: 'bar'
};

// I can't change the reference...
OBJ = 'something else'; // ERROR!

// But I CAN change the thing that is referenced
OBJ.foo = 'barf';

OBJ;
