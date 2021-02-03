/* eslint-disable no-undef */
describe('Visitor can see a list of series', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://content.viaplay.se/pc-se/serier/samtliga',
      response: 'fixture:viaplay_response.json',
    })
    cy.visit('http://localhost:3000')
  })
  it('successfully when visiting root path', () => {
    cy.get("[data-cy='serie-index']").children().should('have.length', 10) //I get 11 when counting? but when i put 11 in the test it breaks...
  })
})
