/**
 * Inventory Update
 * 
 * Compare and update the inventory stored in a 2D array against a second 2D array of
 * 
 *  a fresh delivery. Update the current existing inventory item quantities (in arr1). 
 * 
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * 
 *  The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
    for( var i = 0; i < arr1.length; i++){
        for( var j = 0; j < arr2.length; j++){
            if( arr1[i][1] === arr2[j][1]){
                arr1[i][0] += arr2[j][0];
                arr2[j][1] = 0;
            }
        }
    }
    for( var k = 0; k < arr2.length; k++){
        if(arr2[k][1] !== 0){
            arr1.push(arr2[k]);
        }
    }
    //sort the arr according to 
    //the second items it's the 
    //subarrays
    function compareArr(a,b){ 
        return a[1]>b[1];
    }
    arr1.sort(compareArr);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);  //should return [[88, "Bowling Ball"], [2, "Dirty Sock"],
 //[3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

 updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); 
 //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

 updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
 //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

 updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]]
 , [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) 
 //should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
