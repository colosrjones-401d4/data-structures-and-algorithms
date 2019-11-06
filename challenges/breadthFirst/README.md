### Breadth First Traversal

[![Build Status](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/data-structures-and-algorithms)

* Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
* Graph: I created `Node` and `Edge` classes. The `Node` takes a `data` property and the `Edge` takes `node` and `weight` properties. A `Graph` class uses a JavaScript `Map` as an adjacency list and employs that structure's methods to implement the required functions. The `Graph` class has the following methods:

  * `addNode(data)`
  * `addEdge(start, end, weight)`
  * `getNodes()`
  * `getNeighbors(node)`
  * `size()`
  Most methods have an efficiency of O(1) for time and space. `getNodes` has an efficiency of O(n) for both.
* Breadth