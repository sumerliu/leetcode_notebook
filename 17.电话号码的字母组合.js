/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if( digits == "") return [];
    let dpResult = [];
    let len = digits.length;
    let inputMap = {"2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"};
    for(let i = 0,len = digits.length;i<len;i++){
        dpResult[i] = []; 
        let str = inputMap[digits[i]];
        for(let j = 0,lenj = str.length;j<lenj;j++){
            if(i == 0){
                dpResult[i].push(str[j]);
            }else{
                for(let k = 0,lenk = dpResult[i-1].length;k<lenk;k++){
                    dpResult[i].push(dpResult[i-1][k]+str[j]);
                }
            }
        }
    }
    return dpResult[len-1];
};
// @lc code=end

