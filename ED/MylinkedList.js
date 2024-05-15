
function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = undefined;
    };

    this.append = function (element) {
        const node = new Node(element);
        let current = null;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.size = function () {
        return length;
    }

    this.getElement = function (position) {
        if (position >= 0 && position <= this.size()) {
            let node = head;
            for (let i = 0;
                ((i < position) && (node != null));
                i++) {
                node = node.next;
            }
            return node;
        }
        return null;
    }

    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            let node = new Node(element);
            current = head;
            previous = undefined;
            index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                previous = this.getElement(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if (position > -1 && position <= length) {
            let current = head,
                previous;
            if (position === 0) {
                head - current.next;
            } else {
                previous = this.getElement(position - 1);
                current = previous.next;
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.indexOf = function(element){
        let current = head;
        let index = 0;
        while(current){
            if (element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.remove = function (element){
        let position = this.indexOf(element);
        this.removeAt(position);
    };

    this.ifEmpty = function(){
        return this.length === 0;
    };

    this.getHead = function(){
        return this.head;
    };

    this.toString = function(){
        let current = this.head;
        let string = '';
        while(current){
            string += current.element +
                      (current.next ? ' -> ' : ' ');
            current = current.next;
        }
        return string;
    };
};