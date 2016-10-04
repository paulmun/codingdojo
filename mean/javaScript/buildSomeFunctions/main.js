

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