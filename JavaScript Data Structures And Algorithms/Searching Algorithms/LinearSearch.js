function LinearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const arr=[1,5,6,8,7,4,10]
console.log(LinearSearch(arr,4))