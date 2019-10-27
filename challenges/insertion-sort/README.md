# Challenge 26

## Sorts: Implement Insertion Sort
[PR](https://github.com/colosrjones-401d4/data-structures-and-algorithms/pull/15)

[![Build Status](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms)

## Challenge
* Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

## Approach & Efficiency
* This function loops through the array twice. The outer loop iterates from the second element. It assigns the inner loop's starting point to the beginning of the array and takes the value of the second element. The inner loop checks the value of the array at the outer loop index and moves it left in the array while it's less than the array value at the inner loop index.

In other words, the array is investigated item by item, and if the last item is smaller than the item before, it's moved left until it's not.

This solution has a Big O notation efficiency of O(n^2) for time and O(1) for space.

## UML
N/A
