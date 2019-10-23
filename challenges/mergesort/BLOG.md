# Lecture Notes: Merge Sort

Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.

Merge sort first divides the array into equal halves and then combines them in a sorted manner.

To understand merge sort, we take an unsorted array as the following −

Unsorted Array
We know that merge sort first divides the whole array iteratively into equal halves unless the atomic values are achieved. We see here that an array of 8 items is divided into two arrays of size 4.

Merge Sort Division
This does not change the sequence of appearance of items in the original. Now we divide these two arrays into halves.

Merge Sort Division
We further divide these arrays and we achieve atomic value which can no more be divided.

Merge Sort Division
Now, we combine them in exactly the same manner as they were broken down. Please note the color codes given to these lists.

We first compare the element for each list and then combine them into another list in a sorted manner. We see that 14 and 33 are in sorted positions. We compare 27 and 10 and in the target list of 2 values we put 10 first, followed by 27. We change the order of 19 and 35 whereas 42 and 44 are placed sequentially.

Merge Sort Combine
In the next iteration of the combining phase, we compare lists of two data values, and merge them into a list of found data values placing all in a sorted order.

Merge Sort Combine
After the final merging, the list should look like this −

Merge Sort
Now we should learn some programming aspects of merge sorting.
## Learning Objectives

- Understand what the Merge Sort algorithm is
- Understand the theory behind Merge Sort
- Be able to implement Merge Sort. 


## Lecture Flow

- Draw out a visual of what Merge Sort is and how it moves elements.
    - Includes and array and lots of arrows.
- Go into more detail with pseudo code. 
    - Lay out the for loop and while loop structure.
    - Explain how the temp variable and index tracking ensures that values aren't overwritten.


## Diagram

![Insertion Sort Drawn Out](./assets/MergeSort_Visual.jpg)

## Algorithm

Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too. 

## Pseudocode

(Taken from the Codefellows assignment)

      ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left



## Readings and References

Read [this breakdown from Geeks for Geeks](https://www.geeksforgeeks.org/merge-sort/)

If you are a more visual learner, you can watch [this video from Harvard's CS50](https://www.youtube.com/watch?v=Ns7tGNbtvV4)

You can also use [this study guide from Harvard](https://study.cs50.net/merge_sort) as a quick reference. 