class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */

    // we want to know how many purchases take place before k is finished -> 
    // we need to check if a person is standing in front or behind k so we know if we need to add the purchases in the last round when k leaves the queue 
    timeRequiredToBuy(tickets, k) {
        let timeCount = 0;

        for (let i = 0; i<tickets.length; i++) { // loop runs per person not per round and is counted to timeCount
            if (i <= k) { // person is standing in front of k
                timeCount += Math.min(tickets[i], tickets[k]); // if i is smaller -> person buys less and is finished before k, if k is smaller -> k buys less and i only buys until k is finished -> add to the count either the number of tickets person i wants to buy or the number of tickets person k wants to buy 
            } 
            else { // person is standing behind k
                timeCount += Math.min(tickets[i], tickets[k]-1);
            }      
            
    }
    return timeCount;
}
}
