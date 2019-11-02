# Challenge 27

## Sorts: Implement Merge Sort

[PR](https://github.com/)

[![Build Status](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms)


## Challenge
* 
Write a function for merge sort that takes in an unsorted array and returns the array sorted using merge sort.

## Approach & Efficiency
* Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to merge two arrays in sorted order as long as each is sorted in the first place.

Recursively split the input array in half until a sub-array with only one element is produced.
Merge each sorted sub-array together to produce the final sorted array.
I use two helper functions. The first is a separate function to split arrays in two. This function returns an object with left and right properties with values of the left and right sides of the array. Then, I use a merge function to compare the first elements of two arrays and put them in to a new array in sorted order.

The main mergeSort function has a base case of a an array with a length of 1 or less. In that function, an array is first split into left and right parts, and then mergeSort is called recursively on each half. At the top of the call stack, we get a left and right with one element each. Those values are assigned to l and r, and the two are merged together using merge. The merged array is returned. At the bottom of the call stack, that merged array will include all of the numbers in the original array.

It has a an efficiency of O(n) space and O(n log n) time.
This solution has a Big O notation efficiency of O(n^2) for time and O(1) for space.

## UML
N/A
