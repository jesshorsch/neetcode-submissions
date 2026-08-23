class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = this.cleanUp(s);
        return this.isPal(cleanString);

        
    }


    cleanUp(str) {
        const char = "abcdefghijklmnopqrstuvwxyz0123456789";
        let newString = "";

        for (let i = 0; i<str.length; i++) {
            let stringLowercased = str[i].toLowerCase();
            if (char.indexOf(stringLowercased) !== -1) {
                newString += stringLowercased;
            }
        }
        return newString;
    }

     isPal(str) {
        let left = 0;
        let right = str.length -1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            
                left++;
                right--
            
            

        }
        return true;
    }
}



