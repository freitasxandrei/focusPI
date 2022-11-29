describe('StatsScreen', () => {
  it('loads Status', () => {
    cy.visit('/')

    cy.contains('Status').click()

    cy.contains('Status')

    cy.contains('Sequências')
    cy.contains('0 dias')

    cy.contains('Total')
    cy.contains('0 sessões')

    cy.contains('Tempo total')
    cy.contains('0 minutos')
  })
})
