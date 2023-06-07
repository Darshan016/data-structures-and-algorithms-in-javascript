function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numbertoinsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numbertoinsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numbertoinsert;
  }
}
const arr = [2, -10, 6, 9, 45, -100];
insertionSort(arr);
console.log(arr);
