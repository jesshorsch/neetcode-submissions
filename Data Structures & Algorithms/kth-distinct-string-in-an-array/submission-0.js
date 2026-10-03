class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */

    // array of strings given 
    // number k represents the k-th distinct string in the array 
    // go through array and find strings that occur only once 
    // add all strings to a map and count occurence of every string
    // if the occurrence is 1, count it as a distinct string
    // return a string from the distinct strings depending on k 

    kthDistinct(arr, k) {
        let map = new Map();

        for (let i = 0; i<arr.length; i++) { // go through array string by string 
            map.set(arr[i], (map.get(arr[i]) || 0)+1); // add every string to the map, if it already exists within the map, get the value (the number of occurences) or 0 if it doesnt exist and add 1 
        }

        // all strings added to map 
        let count = 0; // number of distinct strings found 
        for (let string of arr) { // walks through arr
            if (map.get(string) === 1) { // checks if an element in arr occurs only once in the map 
                count++; // add it to the counter 
                if (count === k) { // if it is distinct, is it the k-th distinct element
                    return string; // return this string 
                }
            } // if one element occurs only once 

        }
        return ""; // if none of the conditions are met, return empty string 
        
    }
}
