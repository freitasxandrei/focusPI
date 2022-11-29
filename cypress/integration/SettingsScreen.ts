describe('SettingsScreen', () => {
  it('loads Configurações', () => {
    cy.visit('/')

    cy.contains('Configurações').click()

    cy.contains('Configurações')

    cy.contains('Restaurar dados')
  })

  it('', () => {
    cy.visit('/')

    cy.contains('Configurações').click()

    cy.get('[data-testid=headerBack]').click()

    cy.contains('Configurações')
  })
})
