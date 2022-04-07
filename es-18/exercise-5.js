function memoize(fn) {
  let cache = {};
  return (num) => {
    if(num in cache) {
      console.log("fetching for " + num);
      return cache[num];
    }
    console.log("calcolo per il risultato " + num);
    const x = fn(num);
    cache[num] = x;
    return x; 
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));