class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    // string given, possibly multiple words -> split method
    // reverse the characters of every word individually -> two pointers 
    // preserve spaces 
    // return string 
    reverseWords(s) {
        let result = [];
        let words = s.split(" "); // splits the single words 
            for (let word of words) {
                let chars = word.split(""); // splits the letters of a word

        let i = 0;
        let j = chars.length -1;
            while (i<j) {
            // switch first and last character 
                [chars[i], chars[j]] = [chars[j], chars[i]];
                i++;
                j--;
            // single word is now reversed -> we need a string that saves all the single word into one 
        }
        result.push(chars.join("")); // adds the letters of a word to the array and joins them together without spaces in between 
        }
        return result.join(" ");// returns the result array and joins the words toegther with a space in between 
    }
}

// typeError: selecting a value that is undefined or null (because we havent assigned a value yet), changing an immutable value (a string)
