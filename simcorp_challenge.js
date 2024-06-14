/* Exercise #1 */

function counter(list) {
    let boomerangSubarrays = 0;
    list.forEach((value, index, arr) =>  ((arr[index - 1] === arr[index + 1]) && arr[index - 1] !== value) ? boomerangSubarrays++ : null )
    return boomerangSubarrays;
}

console.log(counter([9, 5, 9, 5, 1, 1, 1]))
console.log(counter([5, 6, 6, 7, 6, 3, 9]))
console.log(counter([4, 4, 4, 9, 9, 9, 9]))

/* Exercise #2 */

function separator(str) {
    const charValues = []
    const subStrValues = []
    str.toLowerCase().split('').forEach((value, index, arr) => {
        const subStr = str.substring(index, str.indexOf(value, index + 1) + 1 );
        const subStrLength = subStr.length;
        if(subStr.startsWith(value) && subStr.endsWith(value) && subStrLength > 1 && subStr[1] !== value && subStrLength >= (subStrValues[0]?.length ?? 0)) {
            charValues.push(value);
            subStrValues.push(subStr);
            if(subStrLength > (subStrValues[0]?.length)) {
                subStrValues.splice(0, 1)
                charValues.splice(0, 1)
            }
        }
    })
    return charValues.sort();
}

console.log(separator('laboratory'))
console.log(separator("aupercslifragiliotist"))
console.log(separator("candle"))

/* Exercise #3 */

function longestSubstring(str) {
    return str.split('').reduce((prev, curr) => {
        if(!prev.includes(curr)) {
            return prev + curr;
        } 
        return prev;
    }, '')
}

console.log(longestSubstring('abcabcbb'))
console.log(longestSubstring('aaaaaa'))
console.log(longestSubstring("abcde"))
console.log(longestSubstring("abcda"))

/* Exercise #4 */

function sizeParentheses(str) {
    return str.match(/\(([^()])*\)/gm)?.length * 2
}

console.log(sizeParentheses("()))))(()())("))

/* Exercise #5 */

function getLength(arr) {
    return `${arr}`.split(/[\[\]\,]/g).length
}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));