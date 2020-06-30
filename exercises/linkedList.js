/* eslint-disable require-jsdoc */
// node exercises/linkedList.js

class LinkedList {
  constructor(value) {
    this.head = {};
    this.head.value = value;
    this.head.next = null;
  }

  push(value) {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = {value: value, next: null};
  }

  pushFirst(value) {
    const node = {value: value, next: {...this.head}};
    this.head = node;
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }

  getLastNode() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  static toDoublyLinkedList(list) {
    let currentNode = list.head;
    let nextNode = currentNode.next;
    currentNode.prev = null;
    nextNode.prev = currentNode;
    while (nextNode != null) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
      if (nextNode != null) {
        nextNode.prev = currentNode;
      }
    }
    return list;
  }
}

function isPalindromeDoubleLinked(list) {
  const doublyLinkedList = LinkedList.toDoublyLinkedList(list);
  let lastNode = doublyLinkedList.getLastNode();
  let firstNode = doublyLinkedList.head;
  if (firstNode == lastNode) return true;
  while (firstNode.next != lastNode && firstNode != lastNode) {
    if (firstNode.value != lastNode.value) return false;
    firstNode = firstNode.next;
    lastNode = lastNode.prev;
  }
  return true;
}

function getFlippedList(list) {
  const flippedList = new LinkedList(null);
  let current = list.head;
  while (current != null) {
    flippedList.pushFirst(current.value);
    current = current.next;
  }
  flippedList.print();
  return flippedList;
}

// not done
function isPalindromeFlip(list) {
  const flippedList = getFlippedList(list);
  return true;
}

function main() {
  const linkedList = new LinkedList(1);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(5);
  linkedList.push(4);
  isPalindromeFlip(linkedList);
//   console.log(`Answer is ${isPalindromeDoubleLinked(linkedList)}`);
}

main();
