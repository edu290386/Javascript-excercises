const adittion = (a,b,...c) => {
    let result = a+b;
    console.log(...c);
    console.log(c.map(element => result += element));
    return result
}

console.log(adittion(1,2,3,4,5,6,7))


function adittion2(a,b,...c){
    let result = a+b;
    c.forEach(function(element){
        result += element
        console.log(result);
    })
    return result
}
console.log(adittion2(1,2,3,4,5,6,7))