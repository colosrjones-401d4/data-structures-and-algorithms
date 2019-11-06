'use strict';

const Graph = require('../../breadthFirst/breadth-first');
const depthFirst = require('../depth-first');

describe('Graph Tests', () => {

  let graph;
  let graph2;
  let three;
  let seven;
  let stringTest = 'nklnklnlnk';
  let numTest = 124;

  beforeEach(() => {

    graph = new Graph();
    graph2 = new Graph();

    const eight = graph.addNode(8);
    const six = graph.addNode(6);
    seven = graph.addNode(7);
    const five = graph.addNode(5);
    three = graph.addNode(3);
    const none = graph.addNode(0);
    const nine = graph.addNode(9);

    graph.addEdge(eight, six);
    graph.addEdge(eight, five);
    graph.addEdge(six, seven);
    graph.addEdge(seven, five);
    graph.addEdge(five, three);
    graph.addEdge(three, none);
    graph.addEdge(none, nine);
    graph.addEdge(nine, eight);

  });


  it('can succesfully conduct a depth first search', () => {

    expect(depthFirst(graph)).toEqual([8]);
  });

  it('will return an invalid message if graph has no vertices', () => {

    expect(depthFirst(graph2)).toEqual('invalid graph');
  });

  it('will return an invalid message if graph has no nodes', () => {

    expect(depthFirst(stringTest)).toEqual('invalid graph');
    expect(depthFirst(numTest)).toEqual('invalid graph');
  });
});