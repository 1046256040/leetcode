
/***
 * 
给你一个整数 n ，请你找出并返回第 n 个 丑数 。丑数就是只包含质因数 2、3 和 / 或 5 的正整数。

示例

示例 1：

输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

示例 2：

输入：n = 1
输出：1
解释：1 通常被视为丑数。

题解：
采用动态规划的方法，dp[i]表示第i+1个丑数（i从0开始），要求第n个丑数，就是求dp[n-1]。
首先，最小的丑数是1，即第一个丑数dp[0] = 1。然后第i+1个丑数，dp[i] = min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)，其中指针p2, p3 , p5表示下一个丑数所乘的质因子是2，3，5。然后判断dp[i]等于其中的哪一项，对应的那一项的指针加1。
最后遍历完，返回dp[n-1]即可。
 */


function nthUglyNum(n) {
    var dps = [];
    dps[0] = 1;

    var dp2 = 0;
    var dp3 = 0;
    var dp5 = 0;

    for (let i = 1; i < n; ++i) {
        dps[i] = Math.min(dps[dp2] * 2, dps[dp3] * 3, dps[dp5] * 5);

        if (dps[i] === dps[dp2] * 2) dp2++;
        if (dps[i] === dps[dp3] * 3) dp3++;
        if (dps[i] === dps[dp5] * 5) dp5++;
    }
    return dps[n - 1];
}

console.log(nthUglyNum(10))