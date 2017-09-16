//bubble sort
/*

*/

function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        var swapped = false;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

//test
var array = [10,5,3,8,2,6,4,7,9,1];
console.log(bubbleSort(array));
