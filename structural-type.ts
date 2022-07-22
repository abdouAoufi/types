let x: { name: string };
let y: { name: string; age?: number };
let z: any = {
  name: "Abdou",
  age: 12,
  lastName: "Somename",
};

x = {
  name: "ted",
};

y = {
  name: "Aoufi",
  age: 40,
};

x = z; // OK
y = z; // OK
x = y; // OK
y = x;

function getNameOrNumber(): string | number {
  return Date.now() % 2 == 0 ? "string" : 27;
}

let norn = getNameOrNumber();
console.log(norn.valueOf()); // ? OK

if ((<string>norn)?.substring) {
  console.log((<string>norn).substring(0, 3)); // IF NORN IS TYPE OF STR
}

function isString(it: string | number): it is string {
  return (<string>it).substring !== undefined;
}

if (isString(norn)) {
  console.log("Yes this is String");
} else {
  console.log(norn.toFixed());
}
