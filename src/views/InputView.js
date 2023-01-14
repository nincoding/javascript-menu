const { Console } = require('@woowacourse/mission-utils');

const InputView = {

  readCoachNames(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', 
    coachNames => callback(coachNames));
  },


  readHateMenus(coachName, callback) {
    Console.readLine(`${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
    hateMenus => callback(hateMenus));
  },
}

module.exports = InputView;