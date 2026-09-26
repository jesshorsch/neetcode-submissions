class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    // two strings given -> two pointers named first and second 
    // return a boolean 
    // slice the number out of the abbr
    // count how many characters in word are in between the letter before and after the number of abbr
    // 
    


    validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;

        while (i < word.length && j < abbr.length) { // while both strings are in bounds
        if (isNaN(abbr[j])) { // wenn buchstabe an der stelle in abbr
            if (word[i] != abbr[j])  // wenn die buchstaben an der stelle nicht gleich sind 
        return false;
        i++;
        j++;
        }
        else { // wenn es eine zahl ist 
        if (abbr[j] == "0") { // wenn die zahl eine 0 ist, ist die abkürzung ungültig 
            return false;
        }
        let num = 0; // höhe der zahl

        while (j<abbr.length && !isNaN(abbr[j])) {
            num = num * 10 + Number(abbr[j]);
            j++;
        }
        i += num // Höhe der Zahl wird zu Länge des Strings gerechnet 
        }
        }
        return i == word.length && j == abbr.length;
        }
    
}
