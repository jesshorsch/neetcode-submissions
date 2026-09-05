class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    // Two Pointer i und j (2 unterschiedliche Strings)
    // Stringbuilder um neuen String zu bauen 
    // Stringbuilder Loop push new character 
    // Sonderfall: Strings sind unterschiedlich lang -> restliche Buchstaben an Ergebnis anhängen 

    mergeAlternately(word1, word2) {
        let i = 0;
        let j = 0;
        let res = [];

        

        while (i < word1.length && j < word2.length) { // während beide Wörter noch nicht am Ende sind
            res.push(word1[i]);
            res.push(word2[j]);
            // jeweils 1 Buchstabe von jedem Wort 
            i++;
            j++;
        }
        

    
        return res.join("") +word1.slice(i) + word2.slice(j);

        
    }

}