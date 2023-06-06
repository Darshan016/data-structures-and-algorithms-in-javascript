function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,start,end){
    if(start>end){
        return -1;
    }
    let mid=Math.floor((start+end)/2)
    if(target<arr[mid]){
        return search(arr,target,start,end-1)
    }
    if(target>arr[mid]){
        return search(arr,target,start+1,end);
    }else{return mid;}
}
const arr=[1,3,4,8,9,10,15];
console.log(binarySearch(arr,10))