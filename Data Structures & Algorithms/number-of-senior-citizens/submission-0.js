class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */

    // one array of strings given 
    // fixed string length of 15 characters 
    // we need to only look at numbers 11 to 13 (age)
    // walk through every word and for every word, cut out the substring for age 
    // if age > 60 add person to count 
    // return count 
    countSeniors(details) {
        let count = 0;
        for (let person of details) {
            
                let age = person.substring(11,13)
                if (age > 60) {
                    count++;
                
                
            }
        }
        return count;
    }
}
