class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */

    // array of numbers given 
    // lucky integer = number which has the same value as it has occurences in the array
    // walk through array and count occurence for every number -> map 
    // check if the value of the key in the map is equal to the number 
    // return the lucky number or -1
    findLucky(arr) {
        let map = new Map();
        let luckyInteger = [];

        for (let i = 0; i<arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0)+1);
        }
        // all of the numbers and their occurences have been set in map 

        for (let j = 0; j<arr.length; j++) { // walk through array and check for every number
            if (arr[j] === map.get(arr[j])) { // is the value of the current number equal to the value of the current element in the map -> lucky integer found
                luckyInteger.push(arr[j]); // add this number to the lucky integer array 
            } 
            
        }
        if (luckyInteger.length === 0){
            return -1;
        }
        return Math.max(...luckyInteger); 
        
    }
}
