function lengthOfLongestSubstring(s) {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) 
{
    for (let j = i; j < s.length; j++) 
    {
        const substr = s.slice(i, j + 1);
        const set = new Set(substr);

        if (set.size === substr.length) 
        {
        maxLen = Math.max(maxLen, substr.length);
        }
    }
}

    return maxLen;
}
console.log( lengthOfLongestSubstring('dvdf'));  