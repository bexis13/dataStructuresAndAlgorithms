/**
 * simply, in selection sort, as we loop over the array from index 0 to n-1 (n being the length of the array),
 * at every index i, we check everyother element to the right of i if anyone is smaller (taking the
 *  smallest one  if more than), if so we swap/exchange them for one another.
 */

function selectionSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        var minValue = arr[i];
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < minValue){
                var temp = minValue;
                minValue = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = minValue;
    }
    return arr;
}
//test
var array = [5,3,7,2,8,4,9,1]; // [1, 2, 3, 4, 5, 7, 8, 9]
var arrayOne =  [4,9,7,1,3,6,5]; // [ 1, 3, 4, 5, 6, 7, 9 ]
console.log(selectionSort(array));
console.log(selectionSort(arrayOne));