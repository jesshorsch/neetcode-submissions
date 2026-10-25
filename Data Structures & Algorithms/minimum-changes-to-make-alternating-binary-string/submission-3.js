class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string given 
    // either 0 or 1 
    

    minOperations(s) {
        let count = 0; // count goes up every time an operation is made -> how often does a number occur that doesnt fit into the desired pattern? 
        let arr = s.split(""); // convert the string into an array to access positions

        for (let k = 0; k<arr.length; k++) { // go through array number by number 

        // assumption: we're expecting the pattern to be 1010
            if (k % 2 === 0) { // if the index is even -> we expect a 1
                if (arr[k] === "0") { // if the previous value is equal to i 
                    count++; // switch 0 to 1 
                }
            }
            else { // index is odd -> we expect a 0 
                if (arr[k] === "1")
                    count++; // switch 1 to 0 
                }
            
    }
    return Math.min(count, arr.length-count); // return either the number of operations to reach pattern 1 or the number of operations to reach pattern 2 -> minimum 
}
}