class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */

    // array of 0 and 1 given 
    // students = food preference, sandwiches = 0 (square sandwich), 1 (circular sandwich)
    // students with preference 1 will only take 1 and vice versa 
    // if there are no 1 left, they are unable to eat 
    // count how many students are unable to eat 
    // we need to compare the first student with the first sandwich, if they match, move both pointers
    // if they dont match, leave the sandwich pointer and only move the students pointer
    countStudents(students, sandwiches) {

        // count how many students want sandwich 0 and how many want sandwich 1 
        let count = [0,0];

        for (let student of students) {
            count[student]++;
        }
        
        // go through the sandwich array and check for every iteration if there is still a student left who wants this sandwich or not 
        for (let i = 0; i<sandwiches.length; i++) {
            if (count[sandwiches[i]] === 0) { // if no student wants this sandwich
            return sandwiches.length -i; // number of sandwiches that havent been eaten yet 
            }
            else { // there are still students left who want this sandwich
            count[sandwiches[i]]--; // reads the value of sandwiches at i and decrements the count at this position in the count array 
            }
        }
        return 0;
    }
}

// shift() removes the first element, pop() the last one
// there is no dequeue() method in javascript -> use shift()
