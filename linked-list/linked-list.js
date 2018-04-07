class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            node.prev = current;
            current.next = node;
            current = node;
            this.tail = current;
        }
        this.size++;
    }

    pop() {
        let data = 0;
        if (!this.head.next) {
            data = this.head.data;
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            data = current.data;
            current = current.prev;
            current.next = null;
            this.tail = current;
        }
        this.size--;
        return data;
    }

    shift() {
        let data = 0;
        if (!this.head.next) {
            data = this.head.data;
            this.head = this.tail = null;
        } else {
            data = this.head.data;
            let current = this.head;
            this.head = current = current.next;
        }
        this.size--;
        return data;
    }

    unshift(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            let current = this.head;
            node.next = current;
            current.prev = node;
            current = node;
            this.head = current;
        }
        this.size++;
    }

    delete(data) {
        if (!this.head.next && this.head.data === data) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.data !== data && current.next) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.tail = current;
        }
        this.size--;
    }

    count() {
        return this.size;
    }
}