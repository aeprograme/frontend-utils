(function (global) {
  /**
   * Array helper.
   *
   * A helper to make it easier to work with Arrays
   *
   * @module ArrayUtils
   * @author AePrograme
   * @version 1.0.0
   * @example
   * const arrayUtils = require('./ArrayUtil.js');
   *
   * const myArray = [1, 2, 3, 4, 5];
   *
   * console.log(arrayUtils.exists(myArray, 3)); // Output: true
   * console.log(arrayUtils.exists(myArray, 6)); // Output: false
   *
   * arrayUtils.add(myArray, 6);
   * console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
   *
   * arrayUtils.remove(myArray, 4);
   * console.log(myArray); // Output: [1, 2, 3, 5, 6]
   *
   * arrayUtils.clear(myArray);
   * console.log(myArray); // Output: []
   *
   * console.log(arrayUtils.isArray([1, 2, 3])); // Output: true
   * console.log(arrayUtils.isArray('hello')); // Output: false
   */
  const arrayUtils = {
    /**
     * Check if an item exists in an array
     * @param {Array} arr - The array to search in
     * @param {any} value - The value to check for existence
     * @returns {boolean} - True if the item exists, false otherwise
     */
    exists(arr, value) {
      return arr.includes(value);
    },

    /**
     * Add an item to an array if it doesn't already exist
     * @param {Array} arr - The array to add the item to
     * @param {any} value - The value to add
     */
    add(arr, value) {
      if (!this.exists(arr, value)) {
        arr.push(value); // Add item if it doesn't exist
      }
    },

    /**
     * Remove an item from an array
     * @param {Array} arr - The array to remove the item from
     * @param {any} value - The value to remove
     */
    remove(arr, value) {
      const index = arr.indexOf(value);
      if (index !== -1) {
        arr.splice(index, 1); // Remove the item at the found index
      }
    },

    /**
     * Clear all items from an array
     * @param {Array} arr - The array to clear
     */
    clear(arr) {
      arr.length = 0; // Set length to 0 to clear the array
    },

    /**
     * Check if a value is an array
     * @param {any} value - The value to check
     * @returns {boolean} - True if it's an array, false otherwise
     */
    isArray(value) {
      return Array.isArray(value);
    }
  };

  // Attach to the global object
  if (typeof window !== "undefined") {
    global.$arrayUtils = global.$arrayUtils || arrayUtils;
  }

  // CommonJS export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayUtils;
  }

  // ES Module export (if supported)
  if (typeof define === "function" && define.amd) {
    define(() => arrayUtils);
  }
})(typeof window !== "undefined" ? window : global);
