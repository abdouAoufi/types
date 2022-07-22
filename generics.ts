const generic = <T>(props: T): T => props;
const genericWithList = <T>(props: T[]): T[] => props;

generic("A"); //? works
generic(5); //? works
generic(false); //? works

let output = generic<string>("hello world"); // thi's called casting in java
let nOutput = generic<any>(1337);

let myIdentity: <T>(args: T) => T = generic;

myIdentity(5);

interface INT<T> {
  (args: T): T;
}

const myId: INT<number> = generic;
myId(21)