Session Utilities
================

The `SessionUtils.js` file provides a set of helper functions to make working with session storage easier. The following functions are available:

### get(key)

*   Gets an item from session storage by its key.
*   Returns the item as a string or an object if it's a JSON string.

### exist(key)

*   Checks if an item exists in session storage by its key.
*   Returns `true` if the item exists, `false` otherwise.

### set(key, value)

*   Sets an item to session storage with a key-value pair.
*   If the value is not a string, it will be stringified as a JSON string.

### remove(key)

*   Removes an item from session storage by its key.

## Usage
-----

This module can be accessed in multiple ways:

### ES Module Import

```javascript
import { session } from './SessionUtils.js';
```

### CommonJS Require

```javascript
const session = require('./SessionUtils.js');
```

### Global Object
The `SessionUtils.js` file also attaches the session object to the global object (`window` or `global`) and assigns it to the `$session` property.

```javascript
// Set an item to session storage
session.set('username', 'johnDoe');
console.log(session.get('username')); // Output: "johnDoe"

// Check if an item exists in session storage
console.log(session.exist('username')); // Output: true
console.log(session.exist('email')); // Output: false

// Remove an item from session storage
session.remove('username');
console.log(session.get('username')); // Output: null
```

Note: In the example above, `session` is used to access the session utility functions. If you're using the global object, you can replace `session` with `$session`.
