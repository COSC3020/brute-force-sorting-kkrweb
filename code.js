// Kane Kriz
// UWYO COSC 3020
// 4 Feb 2025
//
//

// this is broken junk code in its current state
// either stack overflows or fails with simple arrays
// work in progress ha

function permutationSort(a)
{
    var numPerms = 1; //breaks if 0? or irrelevant?
    var bruteForceList = [];
    var originalList = [];
    var listLen = a.length;

    //



    //check for already sorted list
    //...added based on error logs from [0,1] not working but it also might just be that the code is bad enough that the first
    // randomly generated or intentionally provided "a" list from the test code already breaks.
    //
    
    if(a.length == 0 || a.length == 1)
    {
        return 0;
    }
    for(var i = 1; i < a.length; i++)
    {
        if(a[i] < a[i-1])
        {
            break;
        }
    }


    //

    
    originalList = a.slice();
    var numIterations = 0;
    
    while(numIterations < listLen) //shouldve just used a for. Guess i'll roll with this
    {
        bruteForceList.push(Math.floor(Math.random() * listLen)); //this might just be completely useless
        numIterations++; 
    }
    
    for(let i = 1; i < bruteForceList.length; i++) 
    {
        if(bruteForceList[i] < bruteForceList[i-1]) 
        {
            return numPerms + permutationSort(a);
        }
    }

    
    for (let i = 0; i<listLen; i++) 
    {
        a[i] = originalList[bruteForceList[i]];
    }

    //
    
    return numPerms; //number of permutation attempts
}
