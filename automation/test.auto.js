/* eslint no-undef: "error" */
/* global browser */

describe('The Tesing Component', () => {
  it('First Feature', () => {
    browser.pause(5000);
  });

  it('Basic test', () => {
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'
    );
  });
});
