/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x < 0) return false;
//     return x == parseInt((x+'').split('').reverse().join(''));
// };
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNumber = 0;
    while(x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x =  parseInt(x/10);
    }
    return x == revertedNumber || x == parseInt(revertedNumber/10);
};
// @lc code=end

