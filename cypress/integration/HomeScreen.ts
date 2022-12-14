describe('HomeScreen', () => {
  it('loads default mediations', () => {
    cy.visit('/')

    cy.contains('Home')

    cy.contains('POPULAR')
    cy.contains('Power of Love')
    cy.contains('Love and Peace')

    cy.contains('Quick Powerful Training')
    cy.contains('Busy At Work')

    cy.contains('Deep Breathing')
    cy.contains('Just Breath')

    cy.contains('Yawn and Stretch')
    cy.contains('Rise and Shine')
  })

  it('can save favourite trainings to home screen', () => {
    cy.visit('/')

    cy.contains('Power of Love').click()

    cy.get('.r-right-8eqzbf').click()

    cy.get('a').contains('Home').click()

    cy.contains('FAVOURITE')

    cy.contains('Power of Love')
    cy.contains('Love and Peace')
  })
})
