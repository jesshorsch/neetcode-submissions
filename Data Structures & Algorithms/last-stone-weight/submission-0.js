class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    // array of numbers given 
    // every number is weight of a stone
    // find two heaviest stones for every iteration 
    // if same weight -> both destroyed 
    // if one heavier -> lighter one destroyed, heavier one has old weight - weight of lighter stone 
    // continue until one stone left 
    // we change the array in-place 
    // return number (weight of last stone)
    // we need to go through array and find the max twice 
    lastStoneWeight(stones) {

        while (stones.length > 1) { // while there is more than 1 element in the array 
        stones.sort((a,b) => a-b); // sort ascending 
        
        let x = stones.pop(); // removes last element and returns it -> heaviestStone 
        let y = stones.pop(); // removes last element and returns it -> secondHeaviest stone 

        if (x !== y) { // if they are not the same weight
            stones.push(x-y);
        }
        

        }
        return stones.length === 0 ? 0:stones[0];
        
}
}