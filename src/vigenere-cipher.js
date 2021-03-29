const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag;
    }
    encrypt(message, key) {
        if (!message || !key) throw Error;

        var encryptMessage = "";
        key = key.toUpperCase();
        message = message.toUpperCase();
        var k, j = 0;
        for (var i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                k = message.charCodeAt(i) - 65 + key.charCodeAt(j % key.length) - 65;
                k = k > 25 ? k - 26 : k;
                encryptMessage += String.fromCharCode(k + 65);
                j++;
            } else {
                encryptMessage += message[i];
            }
        }
        if (this.flag) return encryptMessage;
        else return encryptMessage.split('').reverse().join('');
    }
    decrypt(encryptMessage, key) {
        if (!encryptMessage || !key) throw Error;

        var message = "";
        key = key.toUpperCase();
        encryptMessage = encryptMessage.toUpperCase();
        var k, j = 0;
        for (var i = 0; i < encryptMessage.length; i++) {
            if (encryptMessage.charCodeAt(i) >= 65 && encryptMessage.charCodeAt(i) <= 90) {
                k = ((encryptMessage.charCodeAt(i) - 65) + 26 - (key.charCodeAt(j % key.length) - 65));
                k = k > 25 ? (k - 26) : k;
                message += String.fromCharCode(k + 65);
                j++;
            } else {
                message += encryptMessage[i];
            }
        }

        if (this.flag) return message;
        else return message.split('').reverse().join('');

    }
}

module.exports = VigenereCipheringMachine;