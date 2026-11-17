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
        
        let sum = 0;
        let res = [];

        for (let i = 0; i<prices.length; i++) {
            let j;
            for (j = i+1; j<prices.length && prices[j] > prices[i]; j++) {
            }
                if (j<prices.length) {
                    sum = prices[i] - prices[j];
                    res.push(sum);
                }
                else {
                    res.push(prices[i]);
                }
            
            
        
    }
    return res;
}
}
