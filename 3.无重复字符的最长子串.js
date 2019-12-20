/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = [];
    let result = 0;
    for(let i = 0,len = s.length;i<len;i++){
        let index = charSet.indexOf(s[i])
        if(index != -1){
            charSet = charSet.slice(index+1);
        }
        charSet.push(s[i]);
        result = Math.max(result,charSet.length);
    }
    return result;
};
// @lc code=end

