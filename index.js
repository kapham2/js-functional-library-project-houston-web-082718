fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // Iterates over a collection of elements, passing each element in turn to a callback function. 
      // Each invocation of callback is called with three arguments: (element, index, collection).
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        } 
      } 
      // If collection is a JavaScript object, callback's arguments will be (value, key, collection). 
      else {
        for (let key in collection) {
          callback(collection[key], key, collection)
        }
      }
      
      // Returns the original collection for chaining.
      return collection;
    },

    map: function(collection, callback) {
      // Produces a new array of values by mapping each value in collection through a transformation 
      // function (callback). The callback is passed three arguments: the value, then the index 
      // (or key) of the iteration, and finally a reference to the entire collection. 
      const mapArray = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          mapArray.push(callback(collection[i], i, collection));
        }
      }
      else {
        for (let key in collection) {
          mapArray.push(callback(collection[key], key, collection))
        }
      }
      
      // Returns a new collection for chaining without modifying the original.
      return mapArray;
    },

    reduce: function(collection, callback, acc) {
      // Reduce boils down a collection of values into a single value. Acc (short for accumulator) 
      // starts as the initial state of the reduction, and with each successive step it should be 
      // accumulate the return value of callback. The callback is passed three arguments: the acc, 
      // the current value in our iteration (the element in the array), and finally a reference to 
      // the entire collection.
      let accumulator = 0;

      for (let element of collection) {
        accumulator = callback(accumulator, element, collection);
      }

      if (acc)
        return acc + accumulator;
      else
        return accumulator;
    },
    
    find: function(collection, predicate) {
      // Looks through each value in the collection, returning the first one that passes a truth 
      // test (predicate), or undefined if no value passes the test. The function returns as soon 
      // as it finds an acceptable element, and doesn't traverse the entire collection.
      for (let element of collection) {
        if (predicate(element))
          return element;
      }
    },

    filter: function(collection, predicate) {
      // Looks through each value in the collection, returning an array of all the values that pass 
      // a truth test (predicate).
      const filterArray = [];

      for (let element of collection) {
        if (predicate(element))
          filterArray.push(element);
      }

      return filterArray;
    },

    size: function(collection) {
      // Return the number of values in the collection.
      let totalSize = 0;

      if (Array.isArray(collection)) {
        for (let element of collection) {
          totalSize++;
        }
      }
      else {
        for (let key in collection) {
          totalSize++;
        }
      }

      return totalSize;
    },

    first: function(array, n) {
      // Returns the first element of an array. Passing n will return the first n elements of the array.
      const firstArray = [];

      if (n) {
        for (let i = 0; i < n; i++) {
          firstArray.push(array[i])
        }
        return firstArray;
      }
      else
        return array[0];

    },

    last: function(array, n) {
      // Returns the last element of an array. Passing n will return the last n elements of the array.
      const lastArray = [];

      if (n) {
        for (let i = array.length - n; i < array.length; i++) {
          lastArray.push(array[i])
        }
        return lastArray;
      }
      else
        return array[array.length - 1];
    },

    compact: function(array) {
      // Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, 
      // "", undefined and NaN are all falsy.
      const compactArray = [];

      for (let element of array) {
        if (element)
          compactArray.push(element);
      }

      return compactArray;
    },

    sortBy: function(array, callback) {
      // Returns a sorted copy of array, ranked in ascending order by the results of running each 
      // value through callback. The values from the original array should be retained within the 
      // sorted copy, just in ascending order.
      const sortArray = array.slice();

      sortArray.sort(function(a, b) {
        return callback(a) - callback(b);
      })

      return sortArray;
    },

    flatten: function(array, booleanShallow) {
      // Flattens a nested array (the nesting can be to any depth).
      // If you pass true for the second argument, the array will only be flattened a single level.
      if (booleanShallow) {
        return array.flat(1);
      }
      else {
        return array.join(",").split(",").map((element) => parseInt(element));
      }
    },

    uniq: function(array, booleanIsSorted, callback) {
      // Produces a duplicate-free version of the array, using === to test object equality. In 
      // particular only the first occurrence of each value is kept. If you know in advance that 
      // the array is sorted, passing true for isSorted will run a much faster algorithm. If you 
      // want to compute unique items based on a transformation, pass a callback function.
      const uniqTransArray = [];
      const uniqArray = [];
      
      if (callback) {
        for (let i = 0; i < array.length; i++) {
          if (!uniqTransArray.includes(callback(array[i]))) {
            uniqTransArray.push(callback(array[i]));
            uniqArray.push(array[i]);
          }
        }
      }
      else {
        for (let element of array) {
          if (!uniqArray.includes(element))
            uniqArray.push(element);
        }
      }

      return uniqArray;
    },

    keys: function(object) {
      // Retrieve all the names of the object's own enumerable properties.
      const keysArray = [];

      for (let key in object) {
        keysArray.push(key);
      }

      return keysArray;
    },

    values: function(object) {
      // Return all of the values of the object's own properties.
      const valuesArray = [];

      for (let key in object) {
        valuesArray.push(object[key]);
      }

      return valuesArray;
    },

    functions: function(object) {
      // Returns a sorted collection of the names of every function in an object — that is to say, 
      // the name of every property whose value is a function.
      const functionArray = [];

      for (let key in object) {
        if (typeof object[key] === "function")
          functionArray.push(key);
      }

      return functionArray.sort((a, b) => a - b);
    },

  }
})()

fi.libraryMethod()
