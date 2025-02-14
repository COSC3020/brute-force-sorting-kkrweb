// Kane Kriz
// UWYO COSC 3020
// 14 Feb 2025
//
//


// this is broken junk code in its current state
// either stack overflows or fails with simple arrays
// work in progress ha


function permutationSort(a)
{
    var numPerms = 1; //breaks if 0? or irrelevant? Try either. I forget why I changed this to 1 from 0. If it was due to an error or feeling I have no idea
    var bruteForceList = [];
    var originalList = [];
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
    
    while(numIterations < listLen) //shouldve just used a for. Would've made tracking through this easier. Guess i'll roll with this
    {
        var randomIndexGenerated = Math.floor(Math.random() * listLen);
        
        var duplicateBool = false; 
        //bool for whether or not a duplicate entry for the permutation is generated...
        //this is probably very cumbersome and inefficient, but if it works it works I suppose...
        
        for(var j = 0; j < bruteForceList.length; j++) 
        {
            if(bruteForceList[j] == originalList[randomIndexGenerated]) 
            {
                duplicateBool = true;
                break;
            }
        }
        if(!duplicateBool) 
        {
            bruteForceList.push(originalList[randomIndexGenerated]);
            numIterations++;
        }
    }

    for(var i = 0; i < bruteForceList.length - 1; i++)
    {
        if(bruteForceList[i] > bruteForceList[i+1])
        {
            return numPerms + permutationSort(a); //"numPerms +" necessary?
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
