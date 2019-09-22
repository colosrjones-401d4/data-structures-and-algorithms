## Challenge Summary
# Array Binary Search
In this challenge we were given a sorted array and a search key. The task was to return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge Description
Find and return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
Compare the search key with the middle element. If the key matches with middle element, we return the middle index. Else If the key is greater than the middle element, then the key can only lie in right half after the middle element. Else (the key is smaller) then the key can only lie in right half after the middle element.

## Solution
<!-- Embedded whiteboard image -->

## Unit Tests
<!-- Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

For each method that you define, write test assertions for the following conditions at minimum:

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)
Unit tests must be passing before you submit your final solution code. -->

#### Documentation
* [Unit Read](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Testing_Workflow)
* [Whiteboard](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Whiteboard_Workflow.html)
* [Code Challenge](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Testing_Workflow)

### Checklist

 - [x] Top-level README “Table of Contents” is updated
 - [ ] Feature tasks for this challenge are completed
 - [ ] Unit tests written and passing
 - [ ] “Happy Path” - Expected outcome
 - [ ] Expected failure
 - [ ] Edge Case (if applicable/obvious)
 - [ ] README for this challenge is complete
 - [ ] Summary, Description, Approach & Efficiency, Solution
 - [ ] Link to code
 - [ ] Picture of whiteboard