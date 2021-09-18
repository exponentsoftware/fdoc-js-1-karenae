function reverseArray(arr){
    let len = arr.length;
    let mid = Math.floor(len/2)
    console.log(arr[mid])
    let temp 
    for(let i=0; i<mid;i++){
        temp = arr[i]
        arr[i] = arr[len-i-1]
        arr[len-i-1] = temp
    }
    console.log(arr)
}
reverseArray(['a','c','g','i','m'])