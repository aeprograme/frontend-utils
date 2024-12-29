Storage Utilities
================

The `StorageUtils.js` file provides a set of helper functions to make working with local storage easier. The following functions are available:

### get(key)

*   Gets an item from local storage by its key.
*   Returns the item as a string or an object if it's a JSON string.

### exist(key)

*   Checks if an item exists in local storage by its key.
*   Returns `true` if the item exists, `false` otherwise.

### set(key, value)

*   Sets an item to local storage with a key-value pair.
*   If the value is not a string, it will be stringified as a JSON string.

## Usage
-----

This module can be accessed in multiple ways:

### ES Module Import

```javascript
import { storage } from './StorageUtils.js';
```

### CommonJS Require

```javascript
const storage = require('./StorageUtils.js');
```

### Global Object
The `StorageUtils.js` file also attaches the storage object to the global object (`window` or `global`) and assigns it to the `$storage` property.

```javascript
// Set an item to local storage
storage.set('username', 'johnDoe');
console.log(storage.get('username')); // Output: "johnDoe"

// Check if an item exists in local storage
console.log(storage.exist('username')); // Output: true
console.log(storage.exist('email')); // Output: false
```

Note: In the example above, `storage` is used to access the storage utility functions. If you're using the global object, you can replace `storage` with `$storage`.
