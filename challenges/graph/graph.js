'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.weight = weight || 0;
    this.vertex = vertex;

  }
}

class Graph{
  constructor(){
    //Map = a hashtable that is not hashing
    this._adjacencyList = new Map();
    this._vertex = new Vertex();

  }
  //Add Vertex(Node)
  addNode(value){
    if (!value){
      return null
    }else{
      let vertex = new Vertex(value);
      this.addVertex(vertex);
    }
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);

  }

  addEdge(startVertex, endVertex, weight){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('Invalid Verticies');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes(){
    let nodes = [ ...this._adjacencyList.keys() ];
    return nodes;
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex) || !vertex){
      return ('Invaild vertex');
    }
    return [...this._adjacencyList.get(vertex)];
  }

  size(){
    return this._adjacencyList.size;
  }
}

const graph = new Graph();

const eight = new Vertex(8);
const six = new Vertex(6);
const seven = new Vertex(7);
const five = new Vertex(5);
const three = new Vertex(3);
const zero = new Vertex(0);
const nine = new Vertex(9);

graph.addVertex(eight);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(five);
graph.addVertex(three);
graph.addVertex(zero);
graph.addVertex(nine);

graph.addEdge(eight, six);
graph.addEdge(eight, five);
graph.addEdge(six, seven);
graph.addEdge(seven, five);
graph.addEdge(five, three);
graph.addEdge(three, zero);
graph.addEdge(zero, nine);
graph.addEdge(nine, eight);

module.exports = {Graph, Edge, Vertex};