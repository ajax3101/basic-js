const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let firstLetters = [];
    let others = [];
    if (Array.isArray(members)) {
        for (let member of members) {
            if (typeof member === 'string') {
                [firstLetter, others] = [...member.trim().toUpperCase()];
                firstLetters.push(firstLetter);
            }
        }
        return firstLetters.sort().join('');
    } else
        return false;
};