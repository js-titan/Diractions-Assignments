// console.log( "Misbah" )
// console.log(arr);

const sumMinMax = (arr) => {
  let minCounter = 0, maxCounter = 0,result=0;

  if (arr.length === 0) return 0;
  
  arr = arr.filter((x) =>  typeof x === "number" );
// console.log("wertyuioiuytr ",arr);

  const minValue = Math.min(...arr)
  const maxValue = Math.max(...arr)
  if (minValue === maxValue) return minValue * arr[0];
  arr.forEach((x) => {
    if (x === minValue) minCounter++;
    if (x === maxValue) maxCounter++;
  })

  result = minCounter * minValue + maxCounter * maxValue;
  return result;
}

console.log(sumMinMax([1, 2, 4, 5, 6, 1, 2]))
console.log(sumMinMax([67]))
console.log(sumMinMax([1, 2, "strinhhere"]))
