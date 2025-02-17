// Kane Kriz
// UWYO COSC 3020
// 16 Feb 2025
//
//






function permutationSort(a)
{
var numPerms = 0;
var permCount = 0;
var arrLen = a.length;
var sortedPerm = false; //will be made true upon a sorted permutation being found. 
    
var temp;
var startPos = 0;
var endPos; 

var combinedNum = 0; //bad.

    //checking for an already sorted list, guaranteed with array entries of size 0 or 1.
    if(arrLen == 0 || arrLen == 1)
    {
        return 0; //0 iterations for either of these examples
    }

    function ascendingSystematicIndex //think for index [a b c], run through indices [0 1 2] then [0 2 1], then [1 0 2], then [1 2 0]. Ascending order, running through all combinations of the first, earliest index left, then moving down the list accordingly.
    {
        //
    }
    return numPerms;
}





//___________________________________________________________________________________________________________________________________________________
/*
STARTING THIS WHOLE EXERCISE OVER
My code is too bad, will remain below in this block.

// this is broken junk code in its current state
// either stack overflows or fails with simple arrays
// work in progress ha


// This is Ship of Theseus code...
// I have nuked it enough times that I don't know if it even deserves to live in the same file anymore


//
// Seems like recursion on this is just asking for a stack overflow
//options are, a stack overflow via recursion with pretty reasonable to follow logic
//or iterative, extremely complicated logic.
//

function permutationSort(a)
{
    //idea is to create an array via checkedIndices to help eliminate duplicate sorting
    //i.e. of a 3 element array, it would try 0 1 2 then 0 2 1, then recording that all permutations with original index 0 still in slot 0 are not sorted.
    //then it would check 1 0 2 and 1 2 0, still seaching for a sorted array via swapping around the indices
    
    var numPerms = 0; 
    var bruteForceList = [];
    var originalList = [];
    var checkedIndices = []; //list to keep track of checked first position indices
    var listLen = a.length;

    //checking for an already sorted list, guaranteed with array entries of size 0 or 1.
    if(a.length == 0 || a.length == 1)
    {
        return 0; //0 iterations for either of these examples
    }

    for(var i = 0; i < a.length - 1; i++) 
    {
        if(a[i] > a[i+1])
        {
            break;
        }
        if(i == a.length - 2)
        {
            return 0;
        }
    }

    originalList = a.slice(); //copy original list if I am understanding slice() correctly

    var numIterations = 0; //num of permutation attempts as specified within the directions. Glorified for loop with this heading below? Yeah
    //This probably could have been not used in favor of using numPerms again somehow

    var currentIndex = 0;

    while(checkedIndices.length < listLen) //loop until all indices are checked
    {
        var duplicateBool = false; 
        //bool for whether or not a duplicate entry for the permutation is generated...
        //this is probably very cumbersome and inefficient, but if it works it works I suppose...

        if(!checkedIndices.includes(currentIndex)) 
        {
            var tempOriginalList = originalList.slice(); //gross

            while(tempOriginalList.length > 0)
            {
                for(var j = 0; j < bruteForceList.length; j++) 
                {
                    if(bruteForceList[j] == tempOriginalList[j]) 
                    {
                        duplicateBool = true;
                        break;
                    }
                }

                if(!duplicateBool && tempOriginalList.length > 0) 
                {
                    bruteForceList.push(tempOriginalList.shift()); 
                    numIterations++;
                }

                for(var i = 0; i < bruteForceList.length - 1; i++)
                {
                    if(bruteForceList[i] > bruteForceList[i+1])
                    {
                        bruteForceList = [];
                        originalList = a.slice();
                        numPerms++;
                        duplicateBool = false;
                        break;
                    }
                }

                if(!duplicateBool)
                {
                    break;
                }
            }
            checkedIndices.push(currentIndex); //adding index to checked list only after all permutations are checked
        }
        currentIndex++;
        if(currentIndex >= listLen)
        {
            currentIndex = 0;
        }
    }

    for(var i = 0; i < listLen; i++)
    //is this for even necessary? Is altering the input array even necessary to complete this exercise?
    //seems unnecessary. I'm going to add and remove it and see if anything changes with the test code running
    {
        a[i] = bruteForceList[i]; //this is awful to look at. Probably not even right
    }
    return numPerms; //returns number of permutations as specified within the problem
}

*/
