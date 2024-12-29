# Array Utilities
================

The `ArrayUtil.js` file provides a set of helper functions to make working with arrays easier. The following functions are available:

### exists(arr, value)

*   Checks if an item exists in an array.
*   Returns `true` if the item exists, `false` otherwise.

### add(arr, value)

*   Adds an item to an array if it doesn't already exist.
*   Returns the updated array.

### remove(arr, value)

*   Removes an item from an array.
*   Returns the updated array.

### clear(arr)

*   Clears all items from an array.
*   Returns the cleared array.

### isArray(value)

*   Checks if a value is an array.
*   Returns `true` if it's an array, `false` otherwise.

## Usage
-----

This module can be accessed in multiple ways:

### ES Module Import

```javascript
import { arrayUtils } from './ArrayUtil.js';
```

### CommonJS Require

```javascript
const arrayUtils = require('./ArrayUtil.js');
```

### Global Object
The `ArrayUtil.js` file also attaches the arrayUtils object to the global object (`window` or `global`) and assigns it to the `$arrayUtils` property.

```javascript
// Create an array
const myArray = [1, 2, 3, 4, 5];

// Check if an item exists in the array
console.log(arrayUtils.exists(myArray, 3)); // Output: true
console.log(arrayUtils.exists(myArray, 6)); // Output: false

// Add an item to the array
arrayUtils.add(myArray, 6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Remove an item from the array
arrayUtils.remove(myArray, 4);
console.log(myArray); // Output: [1, 2, 3, 5, 6]

// Clear the array
arrayUtils.clear(myArray);
console.log(myArray); // Output: []

// Check if a value is an array
console.log(arrayUtils.isArray([1, 2, 3])); // Output: true
console.log(arrayUtils.isArray('hello')); // Output: false
```

Note: In the example above, `arrayUtils` is used to access the array utility functions. If you're using the global object, you can replace `arrayUtils` with `$arrayUtils`.
