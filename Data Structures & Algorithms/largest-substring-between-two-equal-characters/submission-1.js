class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string given 
    // find substring between two equal characters 
    // return the longest (excluding the two equal characters)
    // if there is none, return -1
    // go through string and find two equal letters -> set to check if the letter has been seen before 
    // go through string and check for every letter is this letter is already in the map
    // if yes, use slice method to carve out substring between the two characters 
    // map saves the letter as the key and the index as the value -> when we find a key that is already in the map, we can use the value to find the substring between the index of the current letter and the one in the map 
    maxLengthBetweenEqualCharacters(s) {
        let map = new Map();
        let max = -1; // starting value 

        for (let i = 0; i<s.length; i++) {
            if (!map.has(s[i])) { // if the letter is not yet in the map
            map.set(s[i], i) // add letter
            }
            else { // if letter is in the map
            // carve out substring between the position of the current letter and the last letter 
            let distance = i - map.get(s[i]) -1; // distance between the current index i and the index of the letter in the map (-1 so the last element is not counted )
            max = Math.max(distance, max);
            }

        }
        return max;
    }
}

// set edge case as starting value -> if its never overwritten, the edge case has occured 
// distance = number of elements -1 (fencepost problem)
// slice method expects -> i instead of s[i]
