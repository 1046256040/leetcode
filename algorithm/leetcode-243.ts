
/**
 * 
题目： 最长递增子序列

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

示例1

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

解题思路：

动态规划
 */

function getMaxSubArray(array) {
    if (array.length === 0) {
        return 0;
    }

    let max = 1;
    let dp = []
    dp[0] = 1;

    for(let i = 1; i < array.length; ++i) {
        dp[i] = 1
        for(let j = 0; j < i; ++j) {
            if(array[j] < array[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

let max = getMaxSubArray([10, 9, 2, 5, 3, 7, 101, 18])
console.log("max length:", max)