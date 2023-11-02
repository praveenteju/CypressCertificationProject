describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground')
    cy.get(':nth-child(13) > .text-black').click()
  })
})