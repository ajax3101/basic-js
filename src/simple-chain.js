const CustomError = require("../extensions/custom-error");

const chainMaker = {
    string: [],
    getLength() {
        return this.string.length;
    },
    addLink(value) {
        this.string.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (
            position <= 0 ||
            typeof position !== "number" ||
            position > this.string.length + 1
        ) {
            this.string = [];
            throw new Error();
        }
        this.string.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.string.reverse();
        return this;
    },
    finishChain() {
        let arr = [...this.string];
        this.string = [];
        return arr.join("~~");
    },
};

module.exports = chainMaker;