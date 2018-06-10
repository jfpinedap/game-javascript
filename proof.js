function doMath(x,y){
    return square(x) - square(y);
}


function square(num){
   //console.log(Error().stack);
   return multiply(num,num);
}

function multiply(x,y){
    return x * y;
}

doMath();
doMath();

function logHello(){
    console.log("Hello");
}

function logGoodbye(){
    console.log("Goodbye");
}

console.log(1);
console.log(2);
setTimeout(logGoodbye,1000);
setTimeout(logHello,0);
console.log(3);

var count = 0;

function logCount(){
    count++;
    console.log(count);
    if(count > 5)
       clearTimeout(timer);

}

var timer = setInterval(logCount,1000);