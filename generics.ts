const generic = <T>(props: T): T => props;
const genericWithList = <T>(props: T[]): T[] => props;

generic("A"); //? works
generic(5); //? works
generic(false); //? works

let output = generic<string>("hello world"); // thi's called casting in java
let nOutput = generic<any>(1337);

let myIdentity: <T>(args: T) => T = generic;

myIdentity(5);

interface INT<T extends any> {
  (args: T): T;
}

const myId: INT<number> = generic;
myId(21);

function getProps<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProps(x, "a");
getProps(x, "m");

getProps(x, "a");

type Point = {
  x: number;
  y?: number;
};

type coordinate = keyof Point;

const xp: coordinate = "x";

const myObject: Point = {
  x: 3,
};

console.log(myObject[xp])