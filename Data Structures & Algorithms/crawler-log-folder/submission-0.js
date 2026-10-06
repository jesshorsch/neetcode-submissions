class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */

    // string array given, every string describes an operation 
    // start is always the main folder
    // user performs actions in log
    // how many steps does it at least take to go back to the main folder?
    // types of operations:
    // ../ goes to previous folder that has been opened -> element one further down in the stack 
    // ./ stays in same folder -> stack does not change 
    // goes to child folder -> one element is placed on top of the stack 

    // create an empty stack;
    // go through array string by string 

    minOperations(logs) {
        let stack = [];
        

        for (let i = 0; i<logs.length; i++) {
            if (logs[i] === "../") { // goes one folder back 
                stack.pop(logs[i]) // pops the element on the top of the stack 
                
                continue;
            }
            if (logs[i] === "./") { // stays in the same folder -> stack is not changed 
                continue;
            }
            else {
                stack.push(logs[i]);
                
            }
        }

        return stack.length;

    }
}
