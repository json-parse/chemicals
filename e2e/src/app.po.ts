import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  btnsubmit(){
    return element.all(by.tagName('button')).click();
  }

  getParagraphText() {
    return element(by.css('app-availability h1')).getText();
  }

  getByFormControlName(name: string) {
    return element(by.css('[formControlName=' + name + ']'));
  }

  gateLogin(){
    this.navigateTo();
    this.getByFormControlName('username').sendKeys('gate');
    this.getByFormControlName('password').sendKeys('whatever');
    this.btnsubmit();
  }
}
