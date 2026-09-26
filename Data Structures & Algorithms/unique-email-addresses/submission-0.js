class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */

    // given string array 
    // number should be returned -> counter 
    // check if email adress is valid (has @ sign)
    // dots in the local name are ignored 
    // everything after a + sign in the local name will be ignored 
    // we have to go through every mail and check if the requirements are fullfilled, then we need to remove all the parts that automatically get removed 
    // add all the unique adresses to a res array and return the length 
    numUniqueEmails(emails) {
        let res = [];

        for (let i = 0; i<emails.length; i++) { // goes through every adress 
            if (!emails[i].includes("@")) {
                continue;
            }



            let [local, domain] = emails[i].split("@"); // splits the adress into local and domain 

            let plusIndex = local.indexOf("+"); // finds the position of the + symbol 
            if (plusIndex !== -1) {
                local = local.slice(0, plusIndex) // returns everything BEFORE the plus symbol 
            }

            local = local.split(".").join(""); // removes all the dots from the local part 

            let cleanedAdress = local + "@" + domain; // puts the finished cleaned Adress back together 




            
            if (!res.includes(cleanedAdress)) { // if this variant already exists, dont add it to the new array 
                res.push(cleanedAdress); // we want to add this cleaned adress 

            } 
        }

        return res.length; // return the length of the result array 


    }
}
