function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Usage
const slowFunction = (num) => {
  console.log("Long computation...");
  return num * 2;
};
const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Long computation... 10
console.log(memoizedFunction(5)); // 10 (from cache)
