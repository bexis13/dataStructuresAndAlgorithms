//bubble sort
/*
In bubble sort, we keep iterating while something was swapped in
the previous inner-loop iteration. By swapped I mean, in the 
inner loop iteration, we check each number if the number proceeding 
it is greater than itself, if so we swap them.

The big O on bubble sort is O(N^2). Not efficient.
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
