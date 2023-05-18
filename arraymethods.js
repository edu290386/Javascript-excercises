function nextInLine(arr, item) {
    arr.push(item)
    arr.shift()
    return item;
  }
  
  let testArr = [1, 2, 3, 4, 5];
  
  console.log(`Before: ${testArr}`);
  console.log("Before: " + JSON.stringify(testArr));
  nextInLine(testArr, 6);
  console.log("After: " + JSON.stringify(testArr));
  nextInLine(testArr,[7,8])
  console.log("After: " + JSON.stringify(testArr));
  console.log(`After: ${testArr}`);
  nextInLine(testArr, {perro: "Dustin"});
  console.log("After: " + JSON.stringify(testArr));
  console.log(`After: ${testArr}`);


const arrOfVowels = ["u", "e", "a", "i", "a", "i", "i", "i", "e", "i", "a", "i", "o", "i", "o", "u"]
const countVowels = arrOfVowels.reduce((acc, val) => {
  acc[val] ? (acc[val] += 1) : (acc[val] = 1);
  console.log(acc);
  return acc;
}, {});
console.log(countVowels);


let object1 = {
  firstName: "Nishant",
  age: 24, 
  salary: 300,
}

let object2 = {
  lastName: "Kumar",
  height: '20 meters',
  weight: '70 KG'
}

let object3 = {...object1, ...object2}
console.log(object3);
console.log(object3.firstName, " ", object3.lastName)


const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
const updatedUsers = users.map( p => p.id !== 47 ? p : {...p, age: p.age + 5 });
console.log(updatedUsers);
console.log(users);
const newData = users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
console.log(newData);

