const RecommendController = require('./RecommendController.js');

class App {  

  play() {
    new RecommendController().play();
  }
}

const app = new App();
app.play();

module.exports = App;