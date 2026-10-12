class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */

    // two strings given (ransomNote and magazine)
    // we need to check if the letters of randomNote can be constructed with the letters of ransomNote 
    // -> every letter can be used once -> number of occurence matters -> map 
    // add all letters of magazine to map 
    // go through ransomNote and for every letter, check if it exists in magazine and if yes, subtract 1 in the map 
    // return boolean 
    canConstruct(ransomNote, magazine) {
        let map = new Map();

        for (let i = 0; i<magazine.length; i++) {
            map.set(magazine[i], (map.get(magazine[i]) || 0)+1);
        }

         // we want to save the value from inside the first for loop so that we can access it in the second 

        for (let j = 0; j<ransomNote.length; j++) {
            if (map.has(ransomNote[j]) && map.get(ransomNote[j]) > 0) { // if the letter exists in magazine
            map.set(ransomNote[j], map.get(ransomNote[j])-1) // subtracts one from the values of the letter 
            }
            else {
                return false;
            }
        }
        return true;
            
    }
}

// we can change a value in the map no matter with which parameter the key is accessed as long as we use the variable we set the map to 
// 
