class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */

    
    commonChars(words) {

        let res = [];
        let mapCommon = new Map(); // map that holds which letters are in the first word -> every following word needs to have letters that are in this map 

        for (let letter of words[0]) { // goes through the first word 
            mapCommon.set(letter, (mapCommon.get(letter) || 0)+1);
        }

        for (let i = 1; i<words.length; i++) { // goes through every next word; 1 because we already added the first word 
        let mapCount = new Map(); // holds the number of occurence for every letter, is reset after every iteration 
        for (let letter of words[i]) { // go through each letter of a word and add it to the map 
            mapCount.set(letter, (mapCount.get(letter) || 0)+1);
        }

        for (let [letter, num] of mapCommon) { // go through the map that holds the letters of the first word 
            if (!mapCount.has(letter)) { // if the other map doesnt have the letter at the current position 
                mapCommon.delete(letter); // delete it from the common map 
            }
            else { // if they share a letter
                mapCommon.set(letter, Math.min(num, mapCount.get(letter))); // updates the letter in the common map: num is the previous number of occurence of this letter in every word, mapCount.get tells us how often the letter occurs in the current word -> take the smaller one because a letter in the result can only be placed the amount of times that it occured in every word 
            }
        }

        
        }
        for (let [letter, num] of mapCommon) {
            for (let i = 0; i<num; i++) {
                res.push(letter);
            }
        }

    return res;
        
    }
}

// as soon as we search for duplicates -> map instead of set 
// occurs in all -> minimum because we need to find elements that occur a minimum of once in every word 
// to iterate through a map, use size, not length 
// multiset -> Math.min -> elements are allowed to occur more than once
// pattern: 
// 1. counting elements in a map 
// 2. compare elements of map2 to map1 so they are valid -> change map1 accordingly 
// 3. building result array 
