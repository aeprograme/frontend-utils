(function (global) {
  /**
   * Storage helper.
   *
   * A helper to make it easier to work with local storage
   *
   * @module StorageUtils
   * @author AePrograme
   * @version 1.0.0
   * @example
   * const storage = require('./StorageUtils.js');
   *
   * storage.set('username', 'johnDoe');
   * console.log(storage.get('username')); // Output: "johnDoe"
   *
   * console.log(storage.exist('username')); // Output: true
   * console.log(storage.exist('email')); // Output: false
   */
  const storage = () => {
    /**
     * Get an item from storage by its key
     * @param {string} key
     * @returns {string|null}
     */
    function get(key) {
      const value = localStorage.getItem(key);
      try {
        // Parse the value back into an object or array if it's a JSON string
        return value ? JSON.parse(value) : null;
      } catch (e) {
        // If parsing fails, return the value as is (e.g., a plain string)
        return value;
      }
    }

    /**
     * Check if an item exists in storage by its key
     * @param {string} key
     * @returns {boolean}
     */
    function exist(key) {
      return localStorage.getItem(key) !== null;
    }

    /**
     * Set an item to storage with key-value pair
     * @param {string} key
     * @param {string} value
     */
    function set(key, value) {
      // Stringify the value if it's not a string
      localStorage.setItem(
        key,
        typeof value === "string" ? value : JSON.stringify(value)
      );
    }

    /**
     * Removes an item from storage by its key
     * @param {string} key
     */
    function remove(key) {
      localStorage.removeItem(key);
    }

    // Expose the methods
    return {
      get,
      exist,
      set,
      remove
    };
  };

  // Ensure $storage exists and call storage() to get the object instance
  if (typeof window !== "undefined") {
    global.$storage = global.$storage || storage(); // Call storage to initialize it
  }

  // CommonJS export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = storage(); // Export the storage instance, not the function
    module.exports.default = storage(); // ES Module interop
  }

  // ES Module export (if supported)
  if (typeof define === "function" && define.amd) {
    define(() => storage()); // Export the instance for AMD
  }
})(typeof window !== "undefined" ? window : global);
