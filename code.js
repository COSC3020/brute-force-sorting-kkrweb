// Kane Kriz
// UWYO COSC 3020
// Brute Force Sorting Exercise
// 24 March 2025
//


//


function permutationSort(initialArray)
{
    //some of these variables will prove to be unnecessary or obselete
    var numPerms = 0;
    var permCount = 0;
    var arrLen = initialArray.length;
    var sortedPerm = false; //will be made true upon a sorted permutation being found. At least in theory?

    var temp; //for later swaps

    //potentially obselete
    var startPos = 0;
    var endPos; 

    //checking for an already sorted list, guaranteed with array entries of size 0 or 1.
    if(arrLen == 0 || arrLen == 1)
    {
        return 0; //0 iterations for either of these examples
    }

    //checking if array is sorted
    function sortCheck(createdArray)
    {
        for(var i = 1; i < createdArray.length; i++)
        {
            if(createdArray[i - 1] > createdArray[i])
            {
                return false;
            }
        }
        return true;
    }

    // Following logical implementation was completed with help from the GeeksforGeeks cited.
    // I had no problem invisioning this implementation for the longest time and attempting to implement it
    //but the issues would arise when I would attempt to make the sort have actual systematic progress.
    // Considering the GeeksforGeeks "next permutation" helped me fix the logical issues with my code and actual had it go somewhere ha.
    // Several versions became glorified random non-memory permutation checkers due to me royally messing up the logic for a while.

    //function to generate the next permutation systematticaly
    function nextPermutation(createdArray)
    {
        var i = createdArray.length - 2;
        
        while(i >= 0 && createdArray[i] >= createdArray[i + 1])
        {
            i--;
        }

        if(i >= 0)
        {
            var j = createdArray.length - 1;
            
            while(createdArray[j] <= createdArray[i])
            {
                j--;
            }
            
            //swapping createdArray[i] and createdArray[j]
            temp = createdArray[i];
            createdArray[i] = createdArray[j];
            createdArray[j] = temp;
        }

        
        var left = i + 1;
        var right = createdArray.length - 1;
        
        while(left < right)
        {
            temp = createdArray[left];
            createdArray[left] = createdArray[right];
            createdArray[right] = temp;
            left++;
            right--;
        }
    }

    //check starting array to see if it is already sorted before permutations
    if(sortCheck(initialArray))
    {
        return 0; //already sorted, no permutations necessary
    }

    //generating permutations systematically until the sorted one is found and sortedPerm becomes true
    while(!sortedPerm)
    {
        nextPermutation(initialArray);
        numPerms++;
        
        if(sortCheck(initialArray))
        {
            sortedPerm = true;
        }
    }

    return numPerms; //returns number of perms as specified within the directions
}

//
