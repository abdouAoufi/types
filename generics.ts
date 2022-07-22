const generic = <T>(props?: T): void => console.log(props);

generic("A"); //? works
generic(5); //? works
generic(false); //? works
generic(); //? works


let output = generic<string>("hello world");
