class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */

    // return two-dimensional array 
    // numRows determines how many rows of the triangle should be returned
    // for every row, one field is added 
    // the outer numbers are always ones
    // the positions inbetween these ones are added together based on the two fields right above the current field 
    // to calculate a field, we need the values of the previous row -> recursion 
    // 
    generate(numRows) {

        if (numRows === 1) {
            return [[1]];
        }

        let triangle = this.generate(numRows -1); // calls the function with one row less -> for every new row, we need the old row until we've reached the base case -> the array that is returned in the end
        let prevRow = triangle[numRows -2]; // the previous row that is needed to calculate the new row 
        let newRow = [1];

        for (let i = 1; i<prevRow.length; i++) { // calculates the sums the number of times of the length of prevRow 
            newRow.push(prevRow[i-1] + prevRow[i]);
        }

        newRow.push(1);

        triangle.push(newRow);
        return triangle;
    }
}

// structure of recursive solution 
// base case: which case is the smallest case without calculating?
// variables: what has to be returned? which values do i need to calculate this?
// 
