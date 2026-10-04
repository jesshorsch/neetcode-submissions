class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // one string given 
    // all of the symbols need to be in pairs of two 
    // go through string and every time a bracket occurs, the corresponding bracket is popped of the stack 
    // the stack should be empty in the end 
    // the order in which the brackets occur matters because an opening bracket needs to come before a closing bracket to form a pair 
    // we need to walk through the string and for every bracket that occurs pop a bracket of the end of the string
    // 
    // return boolean 
    isValid(s) {

        let stack = []; // creates an empty stack 
        let pairs = { // creates a map with the brackets 
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }

        for (let bracket of s) { // goes through the string 
        if (bracket in pairs) { // if the bracket is in the map 
            if (stack.pop() !== pairs[bracket]) { // if the element we would pop off the stack is not the same element as our current position in the loop
                return false;
            }
            
        }
        else { // if it is the same element
            stack.push(bracket);
            }
        }
        return stack.length === 0; // if the stack is now empty 
    }
}

// create empty stack and map 
// go through string bracket by bracket 

// if the bracket is in the map (= is a key = is a closing bracket) check:
// if we pop from the stack (we remove the opening bracket that is in the stack from the previous iteration)
// else: the closing bracket is not in the stack, push the opening bracket to the stack 

// in the end, check if the stack is empty 

