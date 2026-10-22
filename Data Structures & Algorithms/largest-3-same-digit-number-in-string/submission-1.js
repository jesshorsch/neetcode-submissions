class Solution {
    /**
     * @param {string} num
     * @return {string}
     */

    // string of numbers given 
    // check if integer is substring of num with length 3 
    // return maximum integer which meets this criteria 
    // if none exists, return ""
    // go though string and find sequences where the same number occurs three times in a row 
    // implement streak counter what increments each time the current number is equal to the previous number 

    largestGoodInteger(num) {
        let streak = 1;
        let best = ""; // number which currently has the best subarray 

        for (let i = 1; i<num.length; i++) {
            if (num[i] === num[i-1]) {
                streak++;
                
            }
            else {
                streak = 1; // reset strike
            }

            if (streak === 3) { // if there has been found a subarray of 3 numbers 
                if(best === "" || num[i] > best) {
                    best = num[i];
                }

            // we need to make sure we're only pushing the biggest substring 
        }
            
        }
        return best === "" ? "" : best.repeat(3); // if we havent found a subarray of 3, return "", if yes, return a string with the value of best 3 times 
        }
    }

// return ends the whole function -> only use after iteration through everything 
// when remembering a best value, we only need a variable and no array 
// if a string should be returned, we cant use Math.max as it returns a value 
// repeat() method repeats a string n times and returns a new string 
