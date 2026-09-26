class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // one array of numbers given
    // go through the whole array and find 1s 
    // if a 1 is found, count how many 1s are behind it 
    // save the number to maxCount
    // if the array is finished, return maxCount
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0; //bisher längste Folge an Einsen 
        let current = 0; // aktuelle Folge an Einsen 
        for (let i = 0; i<nums.length; i++) {
            if (nums[i] === 1) { // wenn eine 1 gefunden wurde 
                current++; // erhöhe aktuelle Kette 
                maxCount = Math.max(maxCount, current); // vergleicht die aktuelle Einsenkette mit der bisher längsten und speichert die längere in maxCount
                }
                else {
                   current = 0; // wenn keine 1 an der Position ist, wird die aktuelle Einsenkette zurückgesetzt 
                }
                

            }
            return maxCount; // längste gefundene Kette wird zurückgegeben
        }
        
    }

