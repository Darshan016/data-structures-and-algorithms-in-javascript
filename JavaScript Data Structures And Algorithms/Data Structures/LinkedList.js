class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    addFirst(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log(`list is empty`)
        }else{
            let curr=this.head;
            let values=''
            while(curr){
                values+=`${curr.value} `
                curr=curr.next
            }
            console.log(values)
        }
    }
    addEnd(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node
        }
        this.size++;
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.addFirst(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node;
            this.size++
        }
    }
    removeFrom(index){
        if(index<0 || index>=this.size){
            return
        }
        let removednode
        if(index===0){
            removednode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removednode=prev.next
            prev.next=removednode.next
            this.size--
            return removednode.value
        }
    }
}
const list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.addFirst(45)
list.addFirst(55)
list.addFirst(60)
list.addEnd(10)
list.insert(5,2)
list.print()
console.log(list.removeFrom(1))
list.print()