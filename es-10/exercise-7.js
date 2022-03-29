function sumUntil(maxValue) {
  let sum = 0;

  for (let i = 0; i <= maxValue; i++) { 
      if(i > 0) {
        sum += i;
      }
   }
   return sum;
}

console.log(sumUntil(5));