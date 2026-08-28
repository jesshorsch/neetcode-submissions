class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) { // solange der linke Wert kleiner ist als der rechte 
                let profit = prices[right] - prices[left]; // Summe aus den beiden Werten 
                maxProfit = Math.max(maxProfit, profit); // gibt den größeren Wert zurück -> MaxProfit wird dadurch neu gesetzt wenn Profit größer ist 
            }

            else {
            left = right; // der linke Pointer springt zum rechten 
        }
        right++ // der rechte Pointer verschiebt sich um einen Schritt 

        
            
        }
        return maxProfit; // der größte Profit wird nach Beenden zurückgegeben
        
    }
}
