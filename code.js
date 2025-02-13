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
    var numPerms = 1; //breaks if 0? or irrelevant? Try either. I forget why I changed this to 1 from 0
    var bruteForceList = [];
    var originalList = [];
    var listLen = a.length;

    // Check for already sorted list
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
        if (i == a.length - 2)
        {
            return 0;
        }
    }

    originalList = a.slice(); //copy original list if I am understanding slice() correctly
    
    var numIterations = 0; //num of permutation attempts as specified within the directions

    while(numIterations < listLen) //shouldve just used a for. Guess i'll roll with this
    {
        var randomNumToAdd = Math.floor(Math.random() * listLen)
        bruteForceList.push(randomNumToAdd);
        numIterations++;
    }

    for(var i = 0; i < bruteForceList.length - 1; i++) // Start at 0
    {
        if(bruteForceList[i] > bruteForceList[i+1]) // Adjust comparison
        {
            return numPerms + permutationSort(a); //"numPerms +" necessary?
        }
    }

    for(var i = 0; i < listLen; i++)
    {
        //this is awful to look at. Probably not even right
        a[i] = originalList[bruteForceList[i]];
    }

}
