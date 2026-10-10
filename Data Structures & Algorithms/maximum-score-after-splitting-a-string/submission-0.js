class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string of 0 and 1 given 
    // split the string into two substrings so that each substring is not empty 
    // multiple solutions
    // go through the string and for each number, create a substring from itself and the numbers before it and another substring with the rest of the array 
    // then, calculate the score for every pair of substrings (number of zeros on the left + number of 1 on the right)
    // create left and right variables and calculate the score with these values 
    // create variable which holds highest score so far 
    // reassign the variables after moving positions 

    maxScore(s) {

        let maxScore = 0;
        let leftScore = 0; // number of zeros on the left
        let rightScore = 0; // number of ones on the right

        for (let number of s) { // goes through the string number by number
        if (number === "1") rightScore++; // if a 1 is found -> add to right Score 
        } 

        for (let i = 0; i<s.length -1; i++) { // length -1 because substring always has to include at least one number and in the last operation, this number would be moved; loop calculates the score for every substring, the parting point for the substring is the index i, which moves 1 further each iteration 
            if (s[i] === "0") leftScore++; // count a 0 to the left score because the parting point went over it and its now laying on the left substring
            else rightScore--; // the number is a 1 -> 1 is laying in left but should be counted to right -> remove one in right 
            maxScore = Math.max(maxScore, leftScore + rightScore);
        }
         
        return maxScore;
    }
}

// if a part needs to have at least 1 element -> length -1
// which counter do we really need? -> scores are sufficient 
// substring method when needing a substring from a string
// slice works with both strings and arrays 

// prefix sum problems
// running sum: goes through string and counts something (old entries are overwritten) -> score is calculated incrementally  by moving current position through each iteration 
// main loop: moves the parting position and calculates the score for each position 
// incremental sums: we only remember one old sum and the current to form the new, not every single sum we calculated 
