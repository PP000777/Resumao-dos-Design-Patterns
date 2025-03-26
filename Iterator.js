class NameIterator {
    constructor(names) {
        this.names = names;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.names.length;
    }

    next() {
        return this.hasNext() ? this.names[this.index++] : null;
    }
}

const names = new NameIterator(["Ana", "Bruno", "Carlos"]);

while (names.hasNext()) {
    console.log(names.next());
}
