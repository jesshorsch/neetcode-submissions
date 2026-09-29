class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    // one array with 0 and 1 given 
    // 0 = empty, 1 not empty 
    // n = number of flowers 
    // flowers can only be planted in 0 
    // flowers cant be planted next to each other 
    // -> we need to find a 0 and check if 
    // - there is a 0 left and right to it 
    // go through array number by number and find a sequence of three 0s -> counter 
    // for every sequence of three 0s, one n can be placed 
    // return boolean 

    canPlaceFlowers(flowerbed, n) {
        let count = 0; // counts the number of positions where a plant can be planted 
        for (let i = 0; i<flowerbed.length; i++) { // go through array until the end
        if (flowerbed[i] == 0) { // if we find a 0 
            if ((i == 0 || flowerbed[i-1] == 0) && (flowerbed[i+1] == 0 || flowerbed.length -1 == i)) { // check these neighbor requirements: left space either should be 0 or be completely empty and right space should either be 0 or completely empty
                flowerbed[i] = 1;
                count++;
                
            }
        }
            
            
        }
        if (count >= n) { // if more places are available than flowers to plant 
            return true;
        }

        else { // if there arent enough places available 
            return false;
        }
    }
}