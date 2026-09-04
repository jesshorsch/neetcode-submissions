class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */

    // check length of word 
    // check if substring of abbr and remaining characters equal the length of word: extract number from word, count remaining characters -> return true, if not return false 
    
    // check if substring is empty -> return false 


    validWordAbbreviation(word, abbr) {
        // i und j da zwei unterschiedliche Strings 
        let i = 0;
        let j = 0;

        while (i < word.length && j < abbr.length) { // while Loop läuft durch beide Strings gleichzeitig 
            // Letter 
            if (isNaN(abbr[j])) { // wenn an der Stelle keine Zahl ist 
                if (word[i] !== abbr[j]) return false; // vergleiche Stellen 
                i++;
                j++;
                // gehe jeweils eins weiter 
            }
            // Number 
            else { // wenn es eine Zahl ist 
                if (abbr[j] == "0") return false; // wenn es 0 ist, gebe gleich false zurück

                let num = 0; // zählt, die hoch die Zahl ist 

                while (j <abbr.length && !isNaN(abbr[j])) { // geht durch Zahl durch bis die Bedingung ist Zahl nichtmeht erfüllt ist 
                    num = num * 10 + Number(abbr[j]); // Zahl wird Stelle für Stelle aufgebaut, indem String mit Number in Number umgewandelt wird und mit 10 multipliziert wird, um die Stelle zu verschieben
                    j++; // Zeiger in abbr geht um 1 weiter 
                }

                i += num; // Höhe der Zahl wird zu Länge des Strings gerechnet -> Zeiger in String geht um diese Höhe weiter 
            }
        }
        return i == word.length && j == abbr.length; // wenn die Längen am Ende zusammenpassen, gebe true zurück 
    }

    
}
