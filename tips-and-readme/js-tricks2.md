1. DOM Manipulation: Reduce Repaints, Boost Efficiency (use document fragment, etc)
2. Avoid memory leaks: remove event listeners when not needed anymore
3. Implement closure for cleaner code
4. Currying functions for re-usability
5. Event Listeners: Debounce and Throttle for Smart Control (check debounce and throttle)
6. Lazy Loading: image (loading="lazy") and script (async and defer)
7. Web Workers: Free Up the Main Thread, Enhance Performance
8. Code Splitting: Load on Demand, Lighten the Load

   ```
   // Load module only when needed
   if (condition) {
   import('./module.js').then(module => {
   module.someFunction();
   });
   }
   ```

9. Loop Optimization: cache array length, avoid heavy computation in loop
10. Browser Caching: set cache header like `Cache-Control: public, max-age=31536000`
11. https://javascript.plainenglish.io/15-excellent-javascript-coding-hacks-54f67c71629c
