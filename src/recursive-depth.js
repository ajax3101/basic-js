const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.subDepth = 1;
    }
    calculateDepth(arr, depth = 1) {
        if (this.subDepth < depth) {
            this.subDepth = depth;
        }
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.subDepth = this.calculateDepth(arr[i], depth + 1);
            }
        }
        let result = this.subDepth;
        this.subDepth = 1;
        return result;
    }
};