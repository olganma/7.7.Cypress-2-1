import data from '../fixtures/auth_data.json'
import login from '../fixtures/selectors.json'

describe("admin login", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it.only("Should successfully login", () => {
    cy.login(data[0].email,data[0].password);
    cy.contains("Управление залами").should("be.visible");
  });

  it('Should show error with empty login', () => {
    cy.login(data[1].email,data[1].password);
    cy.get(login.email).then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Should show error with empty password', () => {
    cy.login(data[2].email,data[2].password);

    cy.get(login.password).then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
});
