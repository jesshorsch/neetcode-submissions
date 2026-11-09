class Solution {
    /**
     * @param {string} s1
     * @return {string[]}
     */

    // given two strings with words 
    // uncommon = word that appears once in one sentence and not in the other 
    // return array of uncommon words 
    // go through string and add every word to a map -> count occurence 
    // we need to split the string into words first 
    // if occurence is 1, word is unique 
    // add it to result array 

    uncommonFromSentences(s1, s2) {
        let res = [];
        let map = new Map();
        let words1 = s1.split(" "); // returns array 
        console.log(words1)
        let words2 = s2.split(" ");

        for (let i = 0; i<words1.length; i++) {
            map.set(words1[i], (map.get(words1[i]) || 0)+1);
        }
        
        for (let i = 0; i<words2.length; i++) {
            map.set(words2[i], (map.get(words2[i]) || 0)+1);
        }
        console.log(map)
        

        for (let [key, value] of map) { // go through the values of the map
            if (value === 1) { // if a word occurs exactly once -> unique 
                res.push(key);
            }
        console.log(res)
        }

        return res;
    }
}
