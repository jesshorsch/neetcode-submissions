class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */

    // given 2 arrays, should return nums1 array in-place
    // arrays already sorted 
    // merge both arrays together by adding num2 to num1, then sort ascending
    // 

    merge(nums1, m, nums2, n) {
        let first = m-1;
        let second = n-1;
        let i = nums1.length -1;

        while (second >= 0) { // während in 2 noch Elemente sind
            let fVal = nums1[first]; // hinterstes Element von 1 
            let sVal = nums2[second]; // hinterstes Element von 2 

            if (fVal > sVal) { // wenn das hinterste Element von 1 größer ist als das von 2, 
                nums1[i] = fVal; // 0 am Ende von 1 wird mit größstem Wert aus 1 überschrieben
                i--;
                first--;
            }
            else { // wenn das hinterste Element von 1 kleiner ist als das von 2,
                nums1[i] = sVal; // 0 am Ende von 1 wird mit größtem Wert aus 2 überschrieben
                i--;
                second--;
            }
        }



    }
}
