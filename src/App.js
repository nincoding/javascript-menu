const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const CoachNameValidator = require('./validators/CoachNameValidator');
const { Console } = require('@woowacourse/mission-utils');
const CoachHateMenusValidator = require('./validators/CoachHateMenusValidator');

class App {

  play() {
	  OutputView.printServiceStartMessage();
    this.inputCoachNames();
  }

  inputCoachNames() {
	  InputView.readCoachNames(coachNames => {
		  if(this.isValidInputValue(CoachNameValidator, coachNames)) {
        this.inputHateMenus(coachNames.split(','));
        return;
      }

      this.inputCoachNames();
	  })
  }

  inputHateMenus(coachNameList) {
    if(!coachNameList.length) {
      this.recommendMenus();
      return;
    }

    const currentCoachName = coachNameList[0];

    InputView.readHateMenus(currentCoachName, hateMenus => {
  
        //this.inputHateMenus([...coachNameList])
      if(this.isValidInputValue(CoachHateMenusValidator, hateMenus)) {
        console.log(hateMenus);
        this.inputHateMenus(coachNameList.slice(1));
        return;
      }

      this.inputHateMenus(coachNameList);
    })
  }

  recommendMenus() {
    OutputView.printRecommendResult('메뉴 추천 결과입니다.');
  }


  isValidInputValue(validator, inputValue) {
    try{
      validator.validate(inputValue);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return false;
    }
  }
}

const app = new App();
app.play();
module.exports = App;
