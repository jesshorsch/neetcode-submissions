class MyStack {
    constructor() {
        this.data = []; // the object gets an attribute "queue" which points to an empty array -> "queue" is the place where the stack saves its numbers (the array)

    }
    
    /**
     * @param {number} x
     * @return {void}
     */

    // set of instructions given 
    // two queues given: one with instructions, one with 2d array of numbers or empty inputs 
    // only queue operations are allowed: push (adds at the end), shift (remove first element)


    push(x) { // puts x on top of the stack
    this.data.push(x); // adds x at the end of the array
    for (let i = 0; i< this.data.length -1; i++) { // go through array until one position before the end (because the x we just added should not be rotated)
    this.data.push(this.data.shift()); // shift selects the first element of the array and push puts it in the end -> the first element in the array (the one we added first) is now in the back of the array 
    }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.data.shift(); // takes the front element and returns it, front = top of the stack (when we push, the array is sorted in reverse so the element we just added is in the front)
    }

    /**
     * @return {number}
     */
    top() {
        return this.data[0]; // first element in the array because when adding it to the array, it is rotated to the first position 
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.data.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// this is used when creating and accessing data of an object (the stack) in different methods of the class 
// we create an object which has customized methods for the stack and the queue -> if we create a new instance of a stack, we can access the methods 
// we use the constructor to set a initialsation for the object 
// 
