function playValue(){
    let value =0;
    function getValue(){
        return value;
    }
    function setValue(newvalue){
        value=newvalue;

    }
    return [getValue,setValue];
}

const [getValue1 , setValue1]=playValue();
const [getValue2 , setValue2]=playValue();

setValue1(100);
setValue2(200);

console.log(getValue1());//100
console.log(getValue2());//200

//playValue is a function that returns an array containing two functions: getValue and setValue. 
//Each time playValue is called, it creates a new closure with its own value variable.When you call playValue "twice" and assign the returned functions
// to getValue1 and setValue1 and getValue2 and setValue2 respectively, "you effectively create two independent instances of getValue and setValue", each with its own value variable.
//So, when you call setValue1(100), it sets the value variable in the closure of getValue1 to 100. Similarly, when you call setValue2(200), it sets the value variable in the closure of getValue2 to 200.


//In above code two different instance(closure) are created which is independent of one another , so first setValue1() sets the value 100 for first instance
//whereas setValue2 sets 200 to other


