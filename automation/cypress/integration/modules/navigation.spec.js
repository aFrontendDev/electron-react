/// <reference types="cypress" />

context('Naviate To', () => {
  it('Counter', () => {
    cy.visit('http://localhost:9001');
    cy.get(`header > button`).click()
    cy.xpath(`//nav//a[text()="Counter"]`).click();
  });
});
