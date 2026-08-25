class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}; 

        for (let string of strs) {
            const count = new Array(26).fill(0);
            for (let char of string) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++
            }

            let key = "";
            for (let i = 0; i<count.length; i++) {
                key += "#" + count[i];
            }

            let arr = []
            if (map[key]) arr = map[key]
            arr.push(string)
            map[key] = arr
        }

        return Object.values(map)
        
        
    }
}
