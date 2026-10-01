class Solution {
    /**
     * @param {string} text
     * @return {number}
     */

    // sting given 
    // how many instances of the word balloon can be formed using only letters from the string?
    // each character can be used once 
    // return number of instances that can be created 
    // we need to add the word balloon to the map letter by letter 
    // we need a map that counts every letter in the string and how often it occurs 
    // we need to check for the string if all the characters that are in it match the characters in the map
    
    maxNumberOfBalloons(text) {
        let map = new Map();
        let word = "balloon";
        let count = 0;
    
        for (let letter of text) { // adds every letter to the map, position doesnt matter 
        map.set(letter, (map.get(letter) || 0) +1);

        }

        while (true) { // the loop is always true -> can only be left through the if inside 
            for (let i = 0; i<word.length; i++) { // goes over the word balloon 
                if (!map.get(word[i])) { // checks if there are still enough letters in the map to form this instance 
                    return count; // returns the current count of instances that have been created 
                }
                map.set(word[i], map.get(word[i])-1); // if there are still enough letters, set the new value of a letter in the map with one less because it has been used to create this instance of balloon 
            }
            count++; // one instance is added to the count
        }


        }
    }

    // dont create two maps, store everything that is available in the map and check for everything i need to create if there is still enough available
    // if its only clear when the loop will end while it runs (like with how many letters are still available) -> use while(true) and a return statement in the body 

