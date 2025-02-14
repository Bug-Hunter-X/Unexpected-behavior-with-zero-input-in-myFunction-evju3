```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Inputs cannot be zero.'); // Explicit error handling
  }

  // ... rest of the function
}
```