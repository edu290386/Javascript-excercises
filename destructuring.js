let object = {
    name: "Nishant",
    age: 24, 
    salary: 300,
    height: '20 meters',
    weight: '70 KG'
  }
function printData({name, age, salary, height, weight}){
    console.log(name, age, salary, height, weight)
}

printData(object)
const {age, salary} = object;
console.log(age, salary)



