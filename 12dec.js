//2011. Final Value of Variable After Performing Operations

const finalValueAfterOperations = (arr) => {
  let count = 0;
  for (let item of arr) {
    if (item === "--X" || item === "X--") count--;
    if (item === "++X" || item === "X++") count++;
  }
  return count;
};
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
const balancedStringSplit = (s) => {
  let result = 0;
  let startCount = 0;
  let endCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      startCount++;
    } else {
      endCount++;
    }
    if (startCount === endCount) result++;
  }
  return result;
};

// console.log(balancedStringSplit("RLRRLLRLRL"));

//1859. Sorting the Sentence
var sortSentence = function (s) {
  const arr = s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((a) => a.slice(0, a.length - 1, 1))
    .join(" ");
  return arr;
};

//2351. First Letter to Appear Twice
const repeatedCharacter = (s) => {
  const seen = {};
  for (let item of s) {
    if (seen[item]) {
      return item;
    }
    seen[item] = item;
  }
  return null;
};

// console.log(repeatedCharacter("abccbaacz"));
//451. Sort Characters By Frequency
var frequencySort = function (s) {
  const seen = {};
  for (let item of s) {
    seen[item] = (seen[item] || 0) + 1;
  }
  const newArr = Object.entries(seen).sort((a, b) => b[1] - a[1]);
  let x = 0;
  const ans = [];
  while (x < newArr.length) {
    let item = newArr[x];
    while (item[1] !== 0) {
      ans.push(item[0]);
      item[1]--;
    }
    x++;
  }
  return ans.join("");
};
//5. Longest Palindromic Substring
var longestPalindrome = function (s) {
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [start, end] = r - l + 1 > end - start + 1 ? [l, r] : [start, end];
    }
  }
  return s.substring(start, end + 1);
};

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let count = 0;
    for (let j = 0; j < needle.length; j++) {
      console.log(haystack[j], needle[j]);
      if (haystack[j + i] !== needle[j]) break;
      count++;
    }
    if (count === needle.length) return i;
  }
  return -1;
};
const haystack = "hello",
  needle = "ll";
console.log(strStr(haystack, needle));
