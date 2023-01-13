const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../contants/index.js');

const Input = {

  input(message, callback) {
    Console.readLine(message, callback);
  },

  readCoachName(callback) {
    this.input(MESSAGE.COACH_NAME, callback);
  },

  readCoachDislike(name, callback) {
    this.input(name + MESSAGE.COACH_DISLIKE, callback);
  },
}

module.exports = Input;