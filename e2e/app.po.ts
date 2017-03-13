import { browser, element, by } from 'protractor';

export class Angular2FullStackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.fc-header-title h2')).getText();
  }
  selectOption(option){
    element(by.cssContainingText('option', option)).click();
    browser.waitForAngular()
  }
   getDayNumber(posicion) {
    return element(by.css('#td_fila'+posicion+' .fc-day-number')).getText();
  }
}
