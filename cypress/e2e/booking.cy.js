import data from "../fixtures/auth_data.json";
import selectors from "../fixtures/selectors.json";

it("Should successfully book admin movie", () => {
  cy.visit("http://qamid.tmweb.ru/admin");
  cy.login(data.email, data.password);

  cy.get(selectors.adminMovie)
    .first()
    .invoke("text")
    .then((text) => {
      cy.visit("http://qamid.tmweb.ru");
      cy.get(selectors.sixth_day).click();
      cy.get(selectors.bookMovie).first().should("have.text", text);
      cy.get(selectors.time).first().click();
      cy.get(selectors.seat).click();
      cy.contains("Забронировать").click();
      cy.contains("Получить код бронирования").should("be.visible");
    });
});
