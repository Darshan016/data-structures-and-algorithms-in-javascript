function cartesionProduct(arr1,arr2){
    let ans=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            ans.push([arr1[i],arr2[j]])
        }
    }
    return ans;
}
const arr1=[1,2]
const arr2=[3,4,5]
console.log(cartesionProduct(arr1,arr2))