const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const CoachNameValidator = require('./validators/CoachNameValidator');
const { Console } = require('@woowacourse/mission-utils');

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

    InputView.readHateMenus(coachNameList.shift(),
      hateMenus => {
        console.log(hateMenus)
        this.inputHateMenus([...coachNameList])
    })
  }

  recommendMenus() {
    console.log('메뉴 추천');
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
