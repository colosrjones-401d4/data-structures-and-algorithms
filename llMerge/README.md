# 401 Code Challenge 08 - Linked List Merge

## Challenge Summary
Zipper merge two linked lists, and return the head of the newly combined linked list.

## Challenge Description
Find and return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
* Method takes in two lists - listA and listB
* Has three variables: node (current of new List, which starts out as this.head), currentA (current of list A which starts out as listA.head), and currentB (current of listB, which starts out as listB.head)
* If one of the lists is empty, it will return the other list.
* Otherwise - While currentA is not null OR currentB is not null
  * if there is still a node in listA (that isn't null), currentA will get redefined as the next node in listA
  * the next node will get assigned as currentB / currentA
  * both node and currentB / currentA get incremented to the next node
* Once we're done traversing both listA and listB, it returns the head of the new linked list.

## Solution
<!-- Embedded whiteboard image -->