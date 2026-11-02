class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */

    // array of strings given, array of numbers given 
    // same length 
    // we want to sort the names array in descending order of heights 
    // create a map and add to every name key a height value 
    // go through map and sort the values descending 
    // output the keys 

    sortPeople(names, heights) {
        let map = new Map();

        for (let i = 0; i<names.length; i++) {
            map.set(heights[i], (names[i]));
        }

        let sorted = Array.from(map).sort((a,b) => b[0]-a[0]);

        return sorted.map(entry => entry[1]);
    }
}

// the key has to be something that is guaranteed to be distinct (in this case height)
