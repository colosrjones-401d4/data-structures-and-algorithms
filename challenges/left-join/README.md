# Challenge 34 

## Travis [![Build Status](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms)
## Pull Request *(https://github.com/colosrjones-401d4/data-structures-and-algorithms/tree/left-join/challenges/left-join)

## Left Join

Perform a left join on two hashmaps

### Challenge
 
Write a function that returns a data structure displaying the output of a left join on two hashmaps. 

### Approach & Efficiency

Grab all the keys from the first object, iterate over each key additing it's value and the value of the key from the second hashmap if exits. 
 
Time: Iterating over the array of keys gives you a time of O(N). Finding objects in a hashmap is O(k), so O(N) it is!

Space: Uses two arrays, one to hold the keys, the other to hld results, so that's on the order of O(N)
