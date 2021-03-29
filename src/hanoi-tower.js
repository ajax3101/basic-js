const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const result = new Object();
    const turns = 2 ** disksNumber - 1;
    result.turns = turns;
    result.seconds = Math.floor(turns * 60 * 60 / turnsSpeed);
    return result
};