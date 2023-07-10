class Node{
    constructor(val) {
        this.val = val
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length=null
    }

    push(val) {
        const node= new Node(val)
        if (!this.head) {
            this.head = node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.length++
        return this
    }
    unshift(val) {
        const node= new Node(val)
        if (!this.head) {
            this.head = node
            this.tail=node
        } else {
            node.next = this.head
            this.head=node
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let curr=this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            let prev = null
            while (curr.next) {
                prev = curr
                curr=curr.next
            }
            prev.next = null
            this.tail=prev
        }
        this.length--
        return curr
    }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.unshift(50)
list.unshift(100)
list.unshift(200)
list.pop()
list.pop()
list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()

console.log(list)