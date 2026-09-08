class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    // i = child
    // g = greed factor
    // s = size 
    // j = cookie 
    // if the size of the cookie is bigger than the individual greed, the child is content
    // 
    // given two arrays, one with the individual greed levels, one with the cookie sizes 
    // we need to traverse both arrays at the same time and compare every greed integer with the size integer
    // if they match or the size is bigger than the greed -> increment the output by one 
    // two different arrays, both start at the first position 


    findContentChildren(g, s) {
        g.sort((a,b) => a-b);
        s.sort((a,b) => a-b);
        let i = 0; // child
        let j = 0; // cookie 
        let contentChildren = 0; // counter to track the number of content children

        while (i < g.length && j < s.length) { // as long as both arrays are in-bounds
            if (s[j] >= g[i]){ // if the size of the cookie is bigger or equal the greed of the child
                contentChildren++; // increment number of content children 
                i++; // go to next child
                j++; // go to next cookie since the cookie is gone now 
            }
            else { // if the greed is bigger than the size of the cookie, we stay at the same child and try a bigger cookie 
                
                j++;
                
            }
            
        }
        return contentChildren;
    }
}
