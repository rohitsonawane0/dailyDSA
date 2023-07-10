const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    return arr
}
const reverseArray = (arr) => {
    let i = 0
    let r = arr.length - 1
    while (i < r) {
        swap(arr,i,r)
        i++
        r--
    }
    return arr
} 

const reqReverseArray = (arr) => {
    let i = 0
    let r = arr.length - 1
    const helper = (arr, i=0, r=arr.length - 1) => {
        if (i > r) return arr
        swap(arr,i,r)
        return helper(arr,i+1,r-1)
    }
    const d= helper(arr)
    return d
} 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(reqReverseArray(arr))


// find maximum and minimum
const seconds = [22, 14, 8, 17, 35, 3]
const getMinMax = (arr) => {
    let max = -Infinity
    let min = Infinity
    
    arr.forEach(element => {
        max = Math.max(element, max)
        min=Math.min(element,min)
    });
    console.log(max,min)
}
// getMinMax(seconds)

// const getKthMaxMin = (arr, k) => {
//     if (k >= arr.length) throw new Error("k must be smaller thar arrays length")
    
// }

const sort012 = (arr, N) => {
    let low = 0
    let mid = 0
    let high = N - 1
    // console.log(first)
    while (mid < high) {
        if (arr[mid] === 0) {
            swap(arr, low, mid)
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            swap(arr, mid, high)
            mid++
            high--
        }
        console.log(mid)
    }
    return arr
}
// sort012([0,2,1,2,0],5)

const req = [5, 2, -6, 2, -4, -1, 5, 7, 8, -1, -7]
//result= [-6,-4,-1,-1,-7,5,2,5,7,8]

const moveNegative = (arr) => {
    let temp = null
    let left = 0
    let right = arr.length-1
    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            swap(arr, left, right)
            left++
        }
    }
console.log(arr)
}
moveNegative(req)