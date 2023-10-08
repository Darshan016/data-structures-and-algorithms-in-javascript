const DoublyLinkedList = require('./DoublyLinkedList')
// const list = require('./DoublyLinkedList')

class LinkedListStack{
    constructor(){
        this.list=new DoublyLinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
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

const stack=new LinkedListStack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(50)
stack.push(80)
stack.print()
console.log(stack.getSize())
// console.log(stack.peek())
stack.pop()
stack.print()