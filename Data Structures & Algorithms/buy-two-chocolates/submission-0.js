class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */

    // array of numbers given 
    // number given 
    // buy two chocolates so that we have a minimum of leftover change 
    // return leftover money 
    // if there is no way, return money number 
    // sort the prices ascending -> the smallest numbers are in the front -> we make sure to spend as little as possible on every chocolate 
    // for every iteration, we check if the current number is smaller than our leftover 
    // greedy: we always take the cheapest chocolate because this way, we can minimize the sum of the two chocolates 

    // for every iteration, we want to update the leftover money -> update in loop 
    
    buyChoco(prices, money) {
        prices.sort((a,b) => a-b);
        
        let cost = prices[0] + prices[1]; // price of the two cheapest chocolates together
        if (cost > money) return money;
        return money - cost;
        

        
        
    }
}

/* 
money = 3 
[2,5,1,2]
sorting: [1,2,2,5]
1st iteration: leftover = 2
2st iteration: 2 >= 2, chocolate amount = 1 -> passes, new leftover 0, chocolate amount 0 
3rd iteration: doesnt pass 


*/