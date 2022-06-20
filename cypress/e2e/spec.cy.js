describe('My First Test', () => {
  it('Visits my projects', () => {
    cy.visit('localhost:3000')
    cy.contains('Android Application')
    cy.contains('read more').click()
    
  })
})