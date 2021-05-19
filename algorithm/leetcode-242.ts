
/**
 * 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true

示例 2:

输入: s = "rat", t = "car"
输出: false

说明:
你可以假设字符串只包含小写字母。
 */

function isAnagram (s, t) {
    if (s.length !== t.length) return false;

    let indexArray = {}
    for (let i = 0; i < s.length; ++i) {
        if (indexArray[s[i]]) {
            indexArray[s[i]]++
        } else {
            indexArray[s[i]] = 1
        }
        if(indexArray[t[i]]) {
            indexArray[t[i]]--
        } else {
            indexArray[t[i]] = -1
        }
    }
    for (let item in indexArray) {
        if (indexArray[item] !== 0) {
            return false
        }
    }
    return true
}
console.log('asdasdasd')
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('anagram', 'nagaram'))