# Challenge 32 Tree Intersection

## Pull Request * (https://github.com/colosrjones-401d4/data-structures-and-algorithms/pull/24)

## Travis [![Build Status](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms)

# Challenge Summary
Find common values in 2 binary trees.

## Challenge Description
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
For this challenge, I used my pre-existing binary tree traversal methods - in this case, breadth-first, to traverse across two separate binary trees. I then put all values into an array, and returned which values were duplicates.
