const sumar = (a,b,...c) => {
    let resultado = a+b;
    c.forEach((element) => resultado += element);
    return resultado
}
console.log(sumar(1,2,3,4,5,6,7))

const perro = {
    nombre: "Dustin",
    raza: "Schanuzer",
    ladrar() {
        console.log("Guau");
        console.log(this.raza);
    }
}
perro.ladrar()

function sumar2(a,b,...c){
    let resultado = a+b;
    c.forEach(function(element){
        resultado += element
        console.log(resultado);
    })
    return resultado
}
console.log(sumar2(1,2,3,4,5,6,7))
