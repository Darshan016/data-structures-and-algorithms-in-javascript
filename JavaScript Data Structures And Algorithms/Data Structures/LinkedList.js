class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
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

  remove(index){
    if(index<0 || index>=this.size){
        return null
    }
    let removedNode
    if(index===0){
        removedNode=this.head
        this.head=this.head.next
    } else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removedNode=prev.next
        prev.next=removedNode.next
    }
    this.size--
    return removedNode.value
  }
  removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
    } else {
        let prev=this.head
        while(prev.next && prev.next.value !==value){
            prev=prev.next
        }
        if(prev.next){
            const removedNode=prev.next
            prev.next=removedNode.next
            this.size--
            return value
        }
        return null
    }
  }

  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i=0
    let curr=this.head
    while(curr){
      if(curr.value===value){
        return i
      }
      curr=curr.next
      i++
    }
    return -1
  }

  reverse(){
    let prev=null
    let curr=this.head
    while(curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.head=prev
  }
}

const list = new LinkedList();
// console.log(list.print())
list.append(10);
list.append(9);
list.append(8);
list.append(11);
// list.print()
list.insert(5, 0);

// list.print();
list.insert(2,2)
// list.print()
// console.log(list.removeValue(11))
// list.removeValue(8)
list.print()
// console.log(list.remove(3))
// list.print()
// list.insert(10,0)
// console.log(list.getSize())
// console.log(list.isEmpty())
// console.log(list.search(9))
list.reverse()
list.print()
console.log(list.head.value)