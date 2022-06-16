/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
let myArray = [1, 2, 3, 2, 32, 2, 1,12,2,3,1,1,1,];
// let myArray = [1,2,3,4,5,6]
// function printMostAppearArray(myArray) {
// myArray.sort();
//   console.log(myArray);
//   var maxCount=0;
//   var value;
//   let count = 1;

//   myArray.reduce((previousValue, currentValue) => {
//     // console.log(previousValue,currentValue);
//     if (previousValue === currentValue) {
//       count++;
//       console.log(count)
//     } else {
//       if (maxCount < count) {
//         maxCount = count;
//         value= previousValue;

//       }
//       console.log(maxCount,value)
//       count = 1;
//     }
//     return currentValue;
//   });
//   return console.log(`value: ${value}, count: ${maxCount}`);
// }

// printMostAppearArray(myArray);

function printMostAppearArray() {
  let count = [];
  myArray.forEach((element, index) => {
    count[index] = 1;
  });
  let max = 0;
  let value;
  for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[i] === myArray[j]) count[i]++;
    }
  }
  for (let i = 0; i < myArray.length; i++) {
    if (max < count[i]) {
      max = count[i];
      value = myArray[i];
    }
  }
  console.log(`value: ${value}, count: ${max}`);
}

printMostAppearArray(myArray);
