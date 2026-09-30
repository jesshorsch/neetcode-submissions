class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // n = number of steps it needs to reach the top of a staircase 
    // integer should be returned 
    // you can climb either one or two steps at a time
    // i should return the number of possibilities there are for climbing on top
    // every steps requires the previous step -> recursion 
    // for every step, there are two possibilities (1 or 2)
    // special case: n is 1 -> only 1 possible -> base case 
    // special case: there is only 1 step left so we can only choose 1 and not 2 
    // for every n, we need to calculate the number of steps of the previous n until we've reached the base case 

    climbStairs(n) {

        if (n ==1) {
            return 1;
        }

        // holds the two previous results (current and previous) to calculate the next 
        let prev = 1; // for n = 1, there is only one possible way
        let current = 2; // for n = 2, there are two possible ways 

        for (let i = 3; i<=n; i++) {
            let next = prev + current;
            prev = current;
            current = next;
            // moves the variables one step further 
        }
        return current;

    }
}
