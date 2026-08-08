class Solution {
    isAnagram(s,t) {
        if (s.length !== t.length) return false;
        const gesehen = new Map();
        for (const char of s ) {
            gesehen.set(char, (gesehen.get(char)|| 0) +1)
        }

        for (const char of t) {
            if (!gesehen.has(char)) return false;
            gesehen.set(char, (gesehen.get(char) || 0) -1)
            if (gesehen.get(char) < 0 ) return false;
        }
        return true;
    }
    
}
