import { browser, by, element } from 'protractor';

export class Angular4Oauth2ClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
