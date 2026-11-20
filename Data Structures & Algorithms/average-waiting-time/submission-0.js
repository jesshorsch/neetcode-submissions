class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */

    // 2d array of numbers given 
    // for every customer, there is a arrival time and a time needed to prepare the order 
    // chef prepares for one customer at a time 
    // in the order they were given 
    // calculate the average waiting time for each customer
    // queue for the incoming inputs
    // we add all the inputs to the queue 
    // we only shift an item from the queue once the time for preparation is through 
    // we take a loop and for every second, we check if the preparation time has finished 
    // -> if yes, shift the element from the queue 
    // average waiting time: all of the waiting times together divided by the number of orders 
    // we need to calculate how long each customer has to wait 
    // return double
    averageWaitingTime(customers) {
        let currentTime = 0; // time when the cook is done with the current order 
        let waitingTime = 0; // total waiting time for all customers 
     for (let [time, preparationTime] of customers) { // reads the two elements of the inner array 
        let start = Math.max(currentTime, time); // if the cook is not done yet -> set start to the time he is done 
        currentTime = start + preparationTime; // we set the time he is done with the next order to the time he starts + the time he takes to prepare 
        waitingTime += currentTime - time; // we add the time the cook is finished and subtract the time where the customer arrived -> waiting time 
     }
        
    return waitingTime / customers.length;

        
    }
}
