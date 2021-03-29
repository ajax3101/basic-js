const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) === '[object Date]') {
        let month = date.getMonth();

        return (month === 11 || month === 0 || month === 1) ?
            'winter' : (month === 2 || month === 3 || month === 4) ?
            'spring' : (month === 5 || month === 6 || month === 7) ?
            'summer' : 'autumn (fall)';
    } else {
        throw new Error('Error');
    }
};