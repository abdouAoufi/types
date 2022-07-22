const generic = <T>(props: T): void => console.log(props);
const genericWithList = <T>(props: T[]): void => console.log(props.length);

generic("A"); //? works
generic(5); //? works
generic(false); //? works

let output = generic<string>("hello world"); // thi's called casting in java
let nOutput = generic<any>(1337);
