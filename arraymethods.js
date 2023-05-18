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



