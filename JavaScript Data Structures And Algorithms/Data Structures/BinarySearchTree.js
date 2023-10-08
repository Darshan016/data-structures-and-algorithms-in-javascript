class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left=node
            } else{
                this.insertNode(root.left,node)
            }
        } else {
            if(root.right===null){
                root.right=node
            } else {
                this.insertNode(root.right,node)
            }
        }
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        } else {
            this.insertNode(this.root,node)
        }
    }

    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value ===value){
                return true
            } else if(value<root.value){
                return this.search(root.left,value)
            } else {
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const tree=new BinarySearchTree()

// console.log(tree.isEmpty())
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
// console.log(tree.isEmpty())
// console.log(tree.search(tree.root,12))
tree.preOrder(tree.root)