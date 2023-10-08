const LinkedList=require('./DoublyLinkedList')

class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const queue=new LinkedListQueue()
console.log(queue.getSize())
console.log(queue.isEmpty())
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(100)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())