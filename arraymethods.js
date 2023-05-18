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






