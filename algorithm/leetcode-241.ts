
/**
 * 
题目：为运算表达式设计优先级

给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。
你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。

示例 1:

输入: "2-1-1"
输出: [0, 2]
解释:
((2-1)-1) = 0
(2-(1-1)) = 2

示例 2:

输入: "2*3-4*5"
输出: [-34, -14, -10, -10, 10]
解释:
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10

(2*3)-4*5
解题思路：

 */


function isDigit(text) {
    return text >= '0' && text <= '9';
}

function isOp(text) {
    return text === '+' || text === '-' || text === '*'
}

function calculate(arr1, op, arr2) {
    if (op === '+') {
        return arr1 + arr2;
    } else if (op === '-') {
        return arr1 - arr2;
    } else if (op === '*') {
        return arr1 * arr2;
    }
}

function getResult(str) {
    let ret = 0;
    let index = 0;
    while (index < str.length && isDigit(str[index])) {
        ret = ret + (Math.pow(10, index) * str[index]);
        index++;
    }
    if (index === str.length) {
        return [ret];
    }

    let ans = [];
    for (let i = 0; i < str.length; ++i) {
        if (isOp(str[i])) {
            let arr1 = getResult(str.substring(0, i));
            let arr2 = getResult(str.substr(i+1, str.length));
            for (let item1 of arr1) {
                for(let item2 of arr2) {
                    ans.push(calculate(item1, str[i], item2));
                }
            }
        }
    }
    return ans;
}

console.log(getResult('2*3-4*5'))