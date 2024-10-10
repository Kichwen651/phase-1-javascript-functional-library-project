
// // Test with an array
// myEach([1, 2, 3], (value) => alert(`Array value: ${value}`));

// // Test with an object
// myEach({ a: 'apple', b: 'banana', c: 'cherry' }, (value) => alert(`Object value: ${value}`));

function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection); // Call the callback with element, index, and collection
        }
     } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate over its keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection); // Call the callback with value, key, and collection
            }
        }
    }

    return collection; // Return the original collection
}

// Example usage
const myArray = [1, 2, 3];
const myObject = { a: 'apple', b: 'banana', c: 'cherry' };

myEach(myArray, alert); // Alerts each number
myEach(myObject, alert); // Alerts each value

function myMap(collection, callback) {
    const result = []; // Create a new array to hold the results

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection)); // Call the callback and push the result
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate over its keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection)); // Call the callback and push the result
            }
        }
    }

    return result; // Return the new array
}
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue; // Start with the initial value

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            // If accumulator is undefined, set it to the first element of the array
            if (accumulator === undefined) {
                accumulator = collection[i];
            } else {
                // Call the callback with the current accumulator and the current element
                accumulator = callback(accumulator, collection[i], i, collection);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate over its keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (accumulator === undefined) {
                    accumulator = collection[key];
                } else {
                    accumulator = callback(accumulator, collection[key], key, collection);
                }
            }
        }
    }

    return accumulator; // Return the final accumulated value
}
function myFind(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            // If the callback returns true for the current element, return that element
            if (callback(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate over its keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                // If the callback returns true for the current value, return that value
                if (callback(collection[key], key, collection)) {
                    return collection[key];
                }
            }
        }
    }

    return undefined; // Return undefined if no value is found
}
function myFilter(collection, callback) {
    const result = []; // Create a new array to hold the filtered results

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            // If the callback returns true for the current element, add it to the result array
            if (callback(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate over its keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                // If the callback returns true for the current value, add it to the result array
                if (callback(collection[key], key, collection)) {
                    result.push(collection[key]);
                }
            }
        }
    }

    return result; // Return the new array of filtered values
}
function mySize(collection) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        return collection.length; // Return the length of the array
    } 
    // Check if the collection is an object
    else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length; // Return the number of keys in the object
    }
    return 0; // Return 0 for non-collections (e.g., null, undefined, etc.)
}
function myFirst(collection, n) {
    // If n is not provided or is greater than the length of the collection, return the first element
    if (n === undefined) {
        return Array.isArray(collection) && collection.length > 0 ? collection[0] : undefined;
    }
    
    // If n is a positive number, return the first n elements
    if (Array.isArray(collection)) {
        return collection.slice(0, n); // Use slice to return the first n elements
    }
    
    return []; // Return an empty array if the collection is not an array
}
function myLast(collection, n) {
    // If n is not provided, return the last element
    if (n === undefined) {
        return Array.isArray(collection) && collection.length > 0 ? collection[collection.length - 1] : undefined;
    }
    
    // If n is a positive number, return the last n elements
    if (Array.isArray(collection)) {
        return collection.slice(-n); // Use slice to return the last n elements
    }
    
    return []; // Return an empty array if the collection is not an array
}
function myKeys(obj) {
    // Check if the input is a non-null object
    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj); // Return an array of the object's own enumerable property names
    }
    return []; // Return an empty array for non-objects or null
}
function myValues(obj) {
    // Check if the input is a non-null object
    if (typeof obj === 'object' && obj !== null) {
        return Object.values(obj); // Return an array of the object's own property values
    }
    return []; // Return an empty array for non-objects or null
}



