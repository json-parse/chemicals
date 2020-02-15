import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

it('should go to gate', () => {
  page.gateLogin();
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate');
});

it('should display New as h1', () => {
  page.gateLogin();
  expect(page.getParagraphText()).toEqual('New');
 });

it('should make a ticket', () => {
  page.gateLogin();
  // browser.sleep(1000);
  element.all(by.tagName('mat-radio-button')).get(1).click();
  // browser.sleep(1000);
  element.all(by.tagName('mat-select')).click();
  // browser.sleep(1000);
  element.all(by.tagName('mat-option')).get(1).click();
  // browser.sleep(1000);
  page.getByFormControlName('quantity').sendKeys(89);
  // browser.sleep(1000);
  element.all(by.tagName('button')).get(3).click();
  // browser.sleep(1000);
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate/location');
});

afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});

});
