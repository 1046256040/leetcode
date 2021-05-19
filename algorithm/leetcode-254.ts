
/**
 * 
题目： 因子的组合

请实现一个函数，该函数接收一个整数 n 并返回该整数所有的因子组合。

示例：

注意：
你可以假定 n 为永远为正数。
因子必须大于 1 并且小于 n。

示例 1：
输入: 1
输出: []

示例 2：
输入: 37
输出: []

示例 3：
输入: 12
输出:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]

示例 4:
输入: 32
输出:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
 */

function dfs(num, subarr, start, result) {
    while (start * start <= num) {
        if (num % start === 0) {
            result.push(subarr.concat([start, num / start]))
            dfs(num/start, subarr.concat([start]), start, result)
        }
        start++
    }
}

function getFactors(num) {
    let result = []
    dfs(num, [], 2, result)
    return result
}

console.log(getFactors(12))