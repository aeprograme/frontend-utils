(function (global) {
  /**
   * Session helper.
   *
   * A helper to make it easier to work with session storage
   *
   * @module SessionUtils
   * @author AePrograme
   * @version 1.0.0
   * @example
   * const session = require('./SessionUtils.js');
   *
   * session.set('username', 'johnDoe');
   * console.log(session.get('username')); // Output: "johnDoe"
   *
   * console.log(session.exist('username')); // Output: true
   * console.log(session.exist('email')); // Output: false
   *
   * session.remove('username');
   * console.log(session.get('username')); // Output: null
   */
  const session = () => {
    /**
     * Get an item from storage by its key
     * @param {string} key
     * @returns {string|null}
     */
    function get(key) {
      const value = sessionStorage.getItem(key);
      try {
        // Parse the value back into an object or array if it's a JSON string
        return value ? JSON.parse(value) : null;
      } catch (e) {
        // If parsing fails, return the value as is (e.g., a plain string)
        return value;
      }
    }

    /**
     * Check if an item exists in session by its key
     * @param {string} key
     * @returns {boolean}
     */
    function exist(key) {
      return sessionStorage.getItem(key) !== null;
    }

    /**
     * Set an item to session with key-value pair
     * @param {string} key
     * @param {string} value
     */
    function set(key, value) {
      // Stringify the value if it's not a string
      sessionStorage.setItem(
        key,
        typeof value === "string" ? value : JSON.stringify(value)
      );
    }

    /**
     * Removes an item from session by its key
     * @param {string} key
     */
    function remove(key) {
      sessionStorage.removeItem(key);
    }

    // Expose the methods
    return {
      get,
      exist,
      set,
      remove
    };
  };

  // Ensure $session exists and call session() to get the object instance
  if (typeof window !== "undefined") {
    global.$session = global.$session || session(); // Call session to initialize it
  }

  // CommonJS export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = session(); // Export the session instance, not the function
    module.exports.default = session(); // ES Module interop
  }

  // ES Module export (if supported)
  if (typeof define === "function" && define.amd) {
    define(() => session()); // Export the instance for AMD
  }
})(typeof window !== "undefined" ? window : global);
