class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    // we need to find the greatest element of the substring right to the current element 
    // replace the current element with the greatest element 
    // replace the last element with -1
    replaceElements(arr) {
        let result = []
        
        for (let i = 0; i<arr.length; i++) {
            let subarray = arr.slice(i+1);
            let max = Math.max(...subarray);

            if (subarray.length == 0) {
                result.push(-1);
            }
            else {
                result.push(max);
            }
        }

        return result;
        
        
    }
}
