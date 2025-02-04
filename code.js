// Kane Kriz
// UWYO COSC 3020
// 4 Feb 2025
//
//



function permutationSort(a)
{
    var numPerms = 1; //breaks if 0? or irrelevant?
    var bruteForceList = [];
    var originalList = [];
    var listLen = a.length;

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
