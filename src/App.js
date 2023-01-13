const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const CoachNameValidator = require('./validators/CoachNameValidator');

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
    for (const coachName of coachNameList) {
      InputView.readHateMenus(coachName);
    }
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
