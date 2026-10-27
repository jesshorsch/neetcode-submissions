class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */

    // array of strings given 
    // we want to make all the strings equal 
    // every operation can move a letter of one word to another 
    // return boolean 
    // map to count the number of occurences per letter -> a letter has to occur the same amount of times in every word for the function to return true 
    // every letter has to occur at least the amount of times that there are words in the array -> if there is less than that, return false
    // we have to count for every letter if it occurs in the strings at least n amount of times (n = number of words)
    // in the map, create a key word each letter and a value for the number of times it occurs in all of the words 
    // add all of the words 
    makeEqual(words) {

        let map = new Map();
        let n = words.length; 

        for (let word of words) { // go through every word letter by letter 
            for (let letter of word) {
            map.set(letter, (map.get(letter) || 0)+1);
            }
        }
        // all of the letters have been added to the map 

        for (let count of map.values()) { // iterates through every value in the map 
        if (count % n !== 0) { // if the value is not dividable by the length -> there are either too much or too little letters 
            return false;
        }
        }
        return true;

        // now the map should be empty if the case is true because every letter occurs the right amount of times 


    }
}
