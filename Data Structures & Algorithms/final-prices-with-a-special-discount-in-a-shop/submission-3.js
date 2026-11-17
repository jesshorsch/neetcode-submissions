class Solution {
    /**
     * @param {number[]} prices
     * @return {number[]}
     */

    // array of numbers given 
    // go through array and check for every number if there is a smaller number afterwards -> if yes, subtract the current number from the number behind 
    // if not, leave it unchanged 
    // push res to a new array 
    // brute force: check for every number every other number in the array and compare which one is bigger 
    // optimized: 

    finalPrices(prices) {
        let res = [...prices];
        let stack = [];

        for (let i = 0; i<prices.length; i++) {
            while (stack.length > 0 && prices[stack[stack.length-1]] >= prices[i]) { // while the stack is not empty and the element at the top is bigger or equal to our current element -> we found the next smaller element
                let idx = stack.pop();
                res[idx] = prices[idx] - prices[i]; // expensive one - less expensive one 
            }
            stack.push(i);
        }
        return res;
    }
}
