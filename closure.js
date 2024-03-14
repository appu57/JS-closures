function createCount(){
    let count=0;
    return function countfunc(){
        count++;
        console.log(count);
    }
}

let func1 = createCount(); //inner function will have access of outer function so when func1() is called first time it prints 1 then next time for func1() it prints 2 becuase count is incremented
func1();
func1();

let func2 = createCount(); 
func2();
func2();