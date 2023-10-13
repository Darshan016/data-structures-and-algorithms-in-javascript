class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  deleteAlternate() {
    let curr = this.head;
    // let prev=null
    while (curr && curr.next) {
      curr.next = curr.next.next;
      curr = curr.next;
    }
  }

  searchByIndex(index) {
    let curr = this.head;
    let i = 1;
    while (curr) {
      if (i == index) {
        return curr.value;
      }
      curr = curr.next;
      i = i + 1;
    }
  }
}

// function to check if two linkedlists are similar or Notification(boolean function)
const similar=function(list1,list2){
  if(list1.head===null && list2.head===null){
    return true
  }
  let cur1=list1.head
  let cur2=list2.head
  while(cur1!==null && cur2!==null){
    if(cur1.value!==cur2.value){
      return false
    }
    if(cur1.next===null && cur2.next===null){
      return true
    }
    cur1=cur1.next
    cur2=cur2.next
  }
  return false
}


const list = new DoublyLinkedList();
list.prepend(0);
list.prepend(12);
list.append(4);
list.prepend(11);
list.append(23);
const list2 = new DoublyLinkedList();
list2.prepend(0);
list2.prepend(12);
list2.append(4);
list2.prepend(11);
list2.append(23);
// list.print()
// console.log(list.removeFromFront())
// list.print()
// list.removeFromEnd()
list.print();
list2.print();
console.log(similar(list,list2))
// list.deleteAlternate()
// list.print()
// console.log(list.searchByIndex(2))
module.exports = DoublyLinkedList;
