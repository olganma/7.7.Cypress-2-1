import data from '../fixtures/auth_data.json'
import login from '../fixtures/selectors.json'

describe("admin login", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it("Should successfully login", () => {
    cy.login(data.email,data.password);
    cy.contains("Управление залами").should("be.visible");
  });

  it('Should show error with empty login', () => {
    cy.login("", data.password);
    cy.get(login.email).then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Should show error with empty password', () => {
    cy.login(data.email, "");

    cy.get(login.password).then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
});
