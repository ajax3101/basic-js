const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let prev = null;
    let result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                prev = null;
                if (i < arr.length - 1) {
                    i++;
                }
            } else if (arr[i] === '--discard-prev') {
                if (result.length > 0 && prev !== null) {
                    result.pop()
                }
            } else if (arr[i] === '--double-next') {
                if (i < arr.length - 1) {
                    result.push(arr[i + 1]);
                }
            } else if (arr[i] === '--double-prev') {
                if (result.length > 0 && prev !== null) {
                    result.push(prev);
                }
            } else {
                prev = arr[i];
                result.push(prev);
            }
        }
        return result;
    } else
        throw new Error('Error')
};