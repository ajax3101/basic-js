const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    var separator = options.separator ? options.separator : '+';
    var additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    var addition = options.addition === undefined ? "" : options.addition;
    var additionTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
    var repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;

    var res = "";
    var addstr = "";

    if (additionTimes) {
        addstr = addition;
        for (var i = 1; i < additionTimes; i++) {
            addstr += additionSeparator + addition;
        }
    }

    if (repeatTimes) {

        for (var i = 1; i < repeatTimes; i++) {
            res += str + addstr + separator;
        }
    }
    res += str + addstr;

    return res;
};