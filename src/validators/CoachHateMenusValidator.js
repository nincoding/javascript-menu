const MENU = require('../constants');

const CoachHateMenusValidator = {

  MAX_MENU_LENGTH : 2,
  
  validate(hateMenus) {
    if (this.isInvalidMenuLength(hateMenus)) {
      throw new Error('[ERROR]');
    }

    if (this.isInvalidHateMenu(hateMenus)) {
      throw new Error ('[ERROR]');
    }
  },

  isInvalidMenuLength(hateMenus = []) {
    const hateMenuList = hateMenus.split(', ');
    return hateMenuList.length > this.MAX_MENU_LENGTH;
  },

  isInvalidHateMenu(hateMenus = []) {
    const hateMenuList = hateMenus.split(', ');
    if (hateMenuList[0] === '') return false;

    const allMenus = Object.values(MENU)
      .map(value => value.split(', '))
      .flat();

    return hateMenuList.some(hateMenu => !allMenus.includes(hateMenu));
  },
}

module.exports = CoachHateMenusValidator;