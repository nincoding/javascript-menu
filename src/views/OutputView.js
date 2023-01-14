const { Console } = require('@woowacourse/mission-utils');

const OutputView = {

  printServiceStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printRecommendResult(message) {
    Console.print(message);
  },

}

module.exports = OutputView;