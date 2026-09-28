class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // one string given 
    // count occurence of every letter in the string -> map 
    // we need to go through the string and read every letter -> position is not important -> for of 
    maxDifference(s) {
        let map = new Map();

    for (let letter of s) { // reads through every letter in the string
            map.set(letter, (map.get(letter) || 0) +1); // update the count by 1 
    }
    let maxOdd = 0; // biggest uneven letter -> set to small value 
    let minEven = Infinity; // smallest even letter -> set to big value

    for (let count of map.values()) {
        if (count % 2 === 1) { // if uneven
        maxOdd = Math.max(maxOdd, count);
        }
        else {
            minEven = Math.min(minEven, count)
        }
    }

    return maxOdd - minEven;
    

    }


    }
    

    

