function moveZeroesToTheEnd(arr){
    return (arr.sort((a, b) => (a === 0) - (b === 0)))
}

console.log(moveZeroesToTheEnd([1, 0, 2, 0, 3]))
console.log(moveZeroesToTheEnd([1, 2, 3, 4, 0, 0]))
console.log(moveZeroesToTheEnd([4, 3, 2, 1, 0, 0]))
console.log(moveZeroesToTheEnd([4, 0, 3, 0,2, 1, 0, 0]))
console.log(moveZeroesToTheEnd([-7, 4, 3, 21, 0, 0, 5, 0]))
console.log(moveZeroesToTheEnd([1, 2, 3]))
console.log(moveZeroesToTheEnd([3, 7, 12, 4, 3]))