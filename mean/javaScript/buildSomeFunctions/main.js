
 // Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
 // Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
 // Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
 // Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
 // Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
 // Hard: Write a function named caller2 that has one parameter. It console.log's the string 'starting', waits 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function runningLogger(){
    console.log('I am running');
} 

function multiplyByTen(x){
    return x * 10;
}

function stringReturnOne(){
    return 'I am stringOne'
}

function stringReturnTwo(){
    return 'I am stringTwo'
}

function caller(x){
    if(typeof(x) === 'function'){
        x()
    }
}

function myDoubleConsoleLog(x,y){
    if(typeof(x) === 'function' && typeof(y) === 'function'){
        console.log(x());
        console.log(y());
    }
}

function caller2(x){
    console.log('starting');
    setTimeout(function(){
        if(typeof(x) === 'function'){
            x(stringReturnOne,stringReturnTwo);
        }
        console.log('ending?');
    }, 2000);
    ;
    return 'interesting';

}

multiplyByTen(5);

caller2(myDoubleConsoleLog);