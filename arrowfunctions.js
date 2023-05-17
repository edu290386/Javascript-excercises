const sumar = (a,b,...c) => {
    let resultado = a+b;
    c.forEach((element) => resultado += element);
    return resultado
}
console.log(sumar(1,2,3,4,5,6,7))