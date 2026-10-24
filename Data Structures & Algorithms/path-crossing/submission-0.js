class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */

    // string given 
    // either north, west, south or east 
    // start at (0,0) -> middle 
    // check if the path crosses itself at some point -> check if a location has been previously visited 
    // return boolean 
    isPathCrossing(path) {
        let x = 0; // horizontal axis
        let y = 0; // vertical axis 
        let visited = new Set();
        visited.add("0,0");

        for (let letter of path) {
            if (letter === "N") y++;
            if (letter === "W") x--;
            if (letter === "S") y--;
            if (letter === "E") x++;

            let key = x + "," + y;

            if (visited.has(key)) return true; // position already visited 
            visited.add(key);
        }

        return false;
    }
    

}