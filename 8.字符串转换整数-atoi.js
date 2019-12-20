/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str.trim().match(/^[+|-]?\d+/)||0), Math.pow(2,31)-1), -Math.pow(2,31))
};
// @lc code=end

