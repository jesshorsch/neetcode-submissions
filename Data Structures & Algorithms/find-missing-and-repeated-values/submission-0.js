class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */

    // 2D array given, each sized n*n
    // each number appears once, exept for a (twice) and b (missing)
    // return normal array with a und b 
    // first, go through array and find the repeated number
    // then, go through array and put every number in a map
    // the difference between the numbers in the map and the length of the array is the missing number 
    // it matters how often a number occurs -> map not set 
    // we set the value as the number of occurences of a number 

    findMissingAndRepeatedValues(grid) {
        let map = new Map();
        let n = grid.length; // number of elements in the outer array 

        for (let i = 0; i<grid.length; i++) { // walks through the outer array block by block
            for (let j = 0; j<grid[i].length; j++) { // walks through the inner array number by number 
                map.set(grid[i][j], (map.get(grid[i][j]) || 0) +1); // adds the number to the map by assigning the key to the current position of j and the value depending if the key already exists either to 1 and then adding 1 or to the value of j at this position
            }

            // all numbers of the array have been added to the map  
        }

        let a,b; // we define the variables because we need them afterwards in the return (scope!)

        for (let num = 1; num<= n*n; num++) { // goes through every number that should exist in the grid (because we set n as a length of the outer array and n*n calculates how many elements should be in the map in total)
            let count = map.get(num) || 0; // we look in the map how often num occurs, if never set it to 0 
            if (count === 2) a = num; // if it occurs twice, we set this number to a 
            if (count === 0) b = num; // if it never occured, we set this number to b 
        }

        return [a,b];

        // returns a normal array with a and b 


    }
}

// count occurences of something and compare it to what is missing / is double 
// 1. what should be there? -> here set n to the length of the outer grid so n*n is the total length with all the numbers that should be in it
// 2. go through array and add all the numbers in 
// 3. check how they differ -> expectation in for loop, then if statements to cover cases 
