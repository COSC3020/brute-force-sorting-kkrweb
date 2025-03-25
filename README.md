# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.



//



RESPONSE: 

The runtime complexity of the implemented algorithm would be O(n!) in the worst case, where n is the length of the starting inputted list. 
This is because the algorithm systematically generates all possible permutations of the list until it finds the sorted one, in lexicographic order based upon the original sorted list.
In the worst case, it would need to check all n! permutations before finding the sorted list. 
This worst potential scenario occurs when the input list is sorted in reverse order, due to the nature of the lecicographic systematic permutations progressing.

The reason for this is that the algorithm generates permutations in order, and the reverse-sorted list is the end permutation in this sequence. 
For example, for the list 3 2 1 the sorted permutation 1 2 3 is the first permutation, while 3 2 1 is the last. 
If the input is reverse-sorted, the algorithm must generate all n! permutations before finding the sorted one, as the sorted permutation is guaranteed to appear last in the sequence.
This ensures that the algorithm performs the maximum number of checks, resulting in the worst-case complexity of **O(n!)**.

A best case for my implemented algorithm would be when the input list is already sorted. 
In this scenario, the algorithm would immediately recognize that the list is sorted (using the sortCheck function) and return 0 permutations.
The time complexity in this case would be O(n), where n is the length of the list.
This O(n) complexity occurs due to the single pass through the list to check if it is sorted.

A worst case for my implemented algorithm would be when the input list is sorted in reverse order.
In this case, the algorithm would need to generate all n! permutations before ultimately finding the sorted list. 
This would result in the worst case asymptotic complexity of the implementation to be O(n!), as explained above. 
The reverse sorted input ensures that the sorted permutation appears last in the sequence of systematically generated permutations, forcing the algorithm to perform the maximum number of checks.
This is the case as the checks for permutations occur in ascending order. (i.e. think index 0 1 2, then 0 2 1, then 1 0 2, then 1 2 0, etc)

This complexity would potentially change if I generated permutations randomly instead of systematically trying them as follows:  
If permutations were generated randomly without somehow storing already attempted permutations, the worst-case complexity would no longer be O(n!), as was said above.
Instead, it would be a worst case of being unbounded, as the algorithm could theoretically never generate the sorted permutation due to repeated attempts. 

However, the average-case complexity would still be O(n!), as the expected number of attempts to find the sorted permutation is proportional to n!. 
It is important to note this proportionality differs from the systematic approach, as the random method could (likely) waste time repeatedly generating the same permutations.
This, as a result, would lead towards inefficiency and a higher constant factor in practice in most applications due to the nature of the algorithm.

On the other hand, the original systematic approach ensures that each permutation is unique and only generated once, guaranteeing that the sorted permutation is found within n! attempts. 
This makes the systematic approach far more predictable and efficient, with a worst-case complexity of O(n!), in contrast to the unbounded (no guarantee) nature of the non-memory random permutation generator.
Most applications would as a result benefit from the guaranteed nature of the systematic sort when compared to the random sort without memory...unless such an application or user is feeling particularly "lucky".
Assuming a net benefit from random chance brute forcing without memory, relative to the systematic brute force sorting (as could be assumed), is not a good idea.
In nearly all but the shortest list sizes, n! permutations is such a high number that finding the actual sorted permutation by random chance without memory may simply never occur, at least prior to the heat death of the universe.

As was touched on above, random generation without memory would introduce notable incosistencies in runtime, in addition to no longer ensuring that the algorithm is even making progress towards eliminating all possible permutations (due to the lack of memory). 
The algorithm may get lucky and find the sorted permutation early, theoreticaly as early as the best case of O(n). 
On the other side of things, the algorithm may get unlucky and take notably longer than the eventual guaranteed progression of the systematic approach.
This largely occurs due to potential of repeated generation of the same non-sorted permutations. 
This unpredictability and large potential for slowdown (due to the above duplicate permutation generation) makes random generation less efficient on average compared to the systematic method, which is guaranteed to make progress toward completion of every possible lexicographic permutation.


//


Start Date: 4 Feb 2025
Last Edited: 24 March 2025
Feedback Request 1: 24 March 2025

Name: Kane Kriz

//

Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:
“Lexicographic Order.” Wolfram.com, Wolfram Research, Inc., 2025, mathworld.wolfram.com/LexicographicOrder.html. Accessed 24 Mar. 2025.

GeeksforGeeks. “Next Permutation.” GeeksforGeeks, 9 Sept. 2022, www.geeksforgeeks.org/next-permutation/, https://doi.org/1082330/Nextpermutation-660. Accessed 19 Mar. 2025.

Lee, Iram. “Efficient Permutations in Lexicographic Order - STEM Hash.” Stemhash.com, 2020, stemhash.com/efficient-permutations-in-lexicographic-order/. Accessed 19 Mar. 2025.
