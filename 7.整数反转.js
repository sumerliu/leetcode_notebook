/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = true;
    if(x < 0) {
        flag = false;
        x = -x;
    }
     let result = parseInt((x+'').split('').reverse().join(''))- 0;
     result = flag?result:(-result);
     if (result > 2147483647 || result < -2147483648) return 0;
     return result;
 };
// @lc code=end

