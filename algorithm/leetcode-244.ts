
/**
 * 
题目： 最短单词距离

请设计一个类，使该类的构造函数能够接收一个单词列表。
然后再实现一个方法，该方法能够分别接收两个单词 word1 和 word2，并返回列表中这两个单词之间的最短距离。您的方法将被以不同的参数调用 多次。

示例:
假设 words = ["practice", "makes", "perfect", "coding", "makes"]

输入: word1 = “coding”, word2 = “practice”
输出: 3
输入: word1 = "makes", word2 = "coding"
输出: 1

解题思路：

将每个单词的索引数组存下来，然后问题转化为：对两个数组求最小差值。

 */

let arrayInput = ["practice", "makes", "perfect", "coding", "makes"]
let indexArray = {}

function init(arrays) {
    for (let i = 0; i < arrays.length; ++i) {
        if (indexArray[arrays[i]]) {
            indexArray[arrays[i]].push(i)
        } else {
            indexArray[arrays[i]] = [i]
        }
    }
}

function getMinDis(word1, word2) {
    let array1 = indexArray[word1]
    let array2 = indexArray[word2]

    let distance = arrayInput.length;

    if (array1.length > 0 && array2.length > 0) {
        let i=0, j =0
        while (i < array1.length && j < array2.length) {
            distance = Math.min(distance, Math.abs(array1[i] - array2[j]))
            if (array1[i] < array2[j]) {
                i++;
            } else {
                j++;
            }
        }
    }

    return distance;
}

init(arrayInput);
console.log(getMinDis('coding', 'practice'))
console.log(getMinDis('makes', 'coding'))
console.log(getMinDis('makes', 'perfect'))
