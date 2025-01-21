# Advanced JS tricks

## 1. Destructuring with Default Values

```
const user = { name: "Alice" };
const { name, age = 25 } = user;

console.log(name); // Alice
console.log(age);  // 25
```

## 2. Dynamic Object Keys

```
const key = "dynamicKey";
const obj = {
  [key]: "value",
};

console.log(obj.dynamicKey); // value
```

## 3. Optional Chaining (?.) for Deep Object Access

```
const user = { address: { city: "New York" } };
console.log(user.address?.city);    // New York
console.log(user.profile?.age);    // undefined
```

## 4. Nullish Coalescing (??)

```
const value = 0;
console.log(value || 10); // 10 (fallback applied)
console.log(value ?? 10); // 0  (fallback not applied)
```

## 5. Short-Circuiting with Logical Operators

```
const isAuthenticated = true;
isAuthenticated && console.log("User is authenticated");

const fallback = "default";
const data = null || fallback;
console.log(data); // default
```

## 6. Memoization with Closures

```
const memoizedAdd = (() => {
  const cache = {};
  return (a, b) => {
    const key = `${a},${b}`;
    if (cache[key]) return cache[key];
    const result = a + b;
    cache[key] = result;
    return result;
  };
})();

console.log(memoizedAdd(2, 3)); // 5 (calculated)
console.log(memoizedAdd(2, 3)); // 5 (cached)
```

## 7. Using Intl for Locale-Sensitive Formatting

```
const number = 1234567.89;
const formatted = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(number);

console.log(formatted); // $1,234,567.89
```

## 8. Debouncing and Throttling for Performance

```
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const onResize = debounce(() => console.log("Resized!"), 300);
window.addEventListener("resize", onResize);
```

```
const throttle = (fn, interval) => {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn(...args);
    }
  };
};

const onScroll = throttle(() => console.log("Scrolling!"), 500);
window.addEventListener("scroll", onScroll);
```

## 9. Custom Map Iteration with forEach

```
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

## 10. Asynchronous Iteration with for await...of

```
async function* fetchData() {
  yield await fetch("https://api.example.com/data1").then((res) => res.json());
  yield await fetch("https://api.example.com/data2").then((res) => res.json());
}

(async () => {
  for await (const data of fetchData()) {
    console.log(data);
  }
})();
```
