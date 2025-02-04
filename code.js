// Kane Kriz
// UWYO COSC 3020
// 4 Feb 2025
//
//



function permutationSort(a)
{
    var numPerms = 0;
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
    
    for(let i = 0; i < listLen; i++) 
    {
        if(bruteForceList[i] !== originalList[i]) 
        {
            numIterations = 0;
            bruteForceList = []; //reset this so it can be randomized again...maybe not necessary?
            numPerms++;
            return permutationSort(a);
        }
    }

    //
    
    return numPerms; //number of permutation attempts
}
