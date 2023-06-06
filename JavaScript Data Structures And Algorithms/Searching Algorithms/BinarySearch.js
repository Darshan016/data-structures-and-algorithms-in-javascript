function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(target<arr[mid]){
            end=mid-1;
        }
        if(target>arr[mid]){
            start=mid+1;
        }
        else{
            return mid;
        }
    }
    return -1;
}
const arr=[1,3,5,10,15];
console.log(binarySearch(arr,100))