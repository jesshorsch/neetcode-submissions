class Solution {
    /**
     * @param {number[]} code
     * @param {number} k
     * @return {number[]}
     */

    // array of numbers given 
    // number k given 
    // if k positive: replace each element with the sum of the next k elements 
    // if k negative: use the previous -k elements 
    // if k zero: use zero 
    // check if k is positive, negative or zero 
    // go through array depending on the case 
    // two pointers, one at beginning, one at end 
    // return a new array 

    decrypt(code, k) {
        let n = code.length;
        let res = new Array(n).fill(0);
        
        let start, end;

        if (k === 0) return res;
        
        // calculate where the window is
        if (k > 0) { // if k is positive 
            start = 1; // window starts at the second object because sum of the next k elements is asked 
            end = k; // window should go until the k-th element 

        }
        else { // if k is negative
            start = n + k; // left margin; we need the elements before index 0 -> at the end of window -> length of array |- k| (we need the absolute because we are counting steps)
            end = n - 1; // right margin -> end of array 

        }

        // calculate the first sum of all elements of the window 

        let sum = 0;
        for (let x = start; x<= end; x++) {
            sum += code[x % n]; // % makes sure the index is valid -> calculates rest of division with n (length of the array) -> numbers whos index is bigger than n start from the beginning again (circular)
        }

        // write results, move the window 

        for (let i = 0; i<n; i++) {
            res[i] = sum; // starting sum fits exactly to the window)
            sum -= code[start % n]; // remove left element (currently points to start, % n makes index valid)
            start++; // moves the left margin 
            end++; // moves the right margin 
            sum += code[end % n]; // the new element that entered the window -> add it to sum 
        }


        
        

        return res;
    }
}

// wrap-around: if after the last element, the first begins again, we need the modulo (gives the rest after dividing -> number is always an array index) -> code[(i+1) % n]
// i+1 -> for indices that go over the array 
// % n -> calculate the rest out of this index number and the length of the array -> new index is inbetween 0 and n-1 in the array
