class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */

    // two arrays given 
    // all elements of arr2 are also in arr1 
    // sort arr1 so the items of arr2 in arr1 are ordered the same way 
    // numbers not in arr2 should be at end of arr1 in ascending order 
    // return new arr
    // go through arr1 and check which numbers are also in arr2 -> add to new arr 
    // push the remaining numbers in arr1 to the back of arr 

    relativeSortArray(arr1, arr2) {
        let map = new Map();
        let arr = [];
        let arrEnd = [];
        let res = [];

        for (let i = 0; i<arr1.length; i++) {
            map.set(arr1[i], (map.get(arr1[i]) || 0)+1);
        }

        for (let i = 0; i<arr2.length; i++) {
            for (let j = 0; j<map.get(arr2[i]); j++) { // loop runs as long as there are elements in arr2 to add 
            arr.push(arr2[i]);
            }
        }
        for (let i = 0; i<arr1.length; i++) { // go through arr1 and check which numbers are not in arr2 
            if (!arr2.includes(arr1[i])) { // if the number doesnt occcur in arr2 
                arrEnd.push(arr1[i]);
            }
        }
        

        arrEnd.sort((a,b) => a-b);

        res = arr.concat(arrEnd);
        return res;
        
    }
}

// choose the array which determines the order of the elements to go over it with a loop 
// 
