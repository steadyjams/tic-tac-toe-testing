describe('Testing Tic-Tac-Toe game play', () => {

  beforeEach(() => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
  })  

  it('Creates a game with 3 rows and X as the winner', () => {
 
    //Creates the playing board and all visibility is correct
    cy.get('#number').type('THREE') 
    cy.get('#start').click() //testing non-numeric characters
    cy.wait(1000) //pausing for visibility
    cy.get('#number').clear()
    cy.get('#number').type('3').should ('have.value', '3')
    cy.get('#start').click()
    cy.get('table tr').should('have.length', 3)
    cy.get('#endgame').should('not.be.visible')

    //Plays the game
    cy.get('#0').click().should('contain','X')
    cy.get('#0').click().should('not.contain','O')
    cy.get('#1').click().should('contain','O')
    cy.get('#4').click().should('contain','X')
    cy.get('#5').click().should('contain','O')
    cy.get('#8').click().should('contain','X') 

    //Verify correct message on game end. 
    cy.get('#endgame').should('contain','Congratulations player X')

  })

it('Creates a game with 4 rows and O as the winner', () => {
 
    //Verifies that games require the same number in a row as there are rows
    cy.get('#number').type('4').should ('have.value', '4')
    cy.get('#start').click()
    cy.get('table tr').should('have.length', 4)
    cy.get('#endgame').should('not.be.visible')

    //Plays the game
    cy.get('#7').click().should('contain','X')
    cy.get('#7').click()
    cy.get('#0').click().should('contain','O')
    cy.get('#2').click().should('contain','X')
    cy.get('#4').click().should('contain','O')
    cy.get('#9').click().should('contain','X') 
    cy.get('#12').click().should('contain','O')
    cy.get('#11').click().should('contain','X') 
    cy.get('#3').click().should('contain','O') 
    cy.get('#14').click().should('contain','X') 
    cy.get('#8').click().should('contain','O') 

    //Verify correct message on game end. 
    cy.get('#endgame').should('contain','Congratulations player O')

  })

  it('Creates a game with 3 rows and no winner.', () => {
 
    //Creates the playing board and all visibility is correct
    cy.get('#number').type('3').should ('have.value', '3')
    cy.get('#start').click()
    cy.get('table tr').should('have.length', 3)
    cy.get('#endgame').should('not.be.visible')

    //Plays the game
    cy.get('#0').click().should('contain','X')
    cy.get('#0').click().should('not.contain','O')
    cy.get('#1').click().should('contain','O')
    cy.get('#2').click().should('contain','X')
    cy.get('#3').click().should('contain','O')
    cy.get('#5').click().should('contain','X')
    cy.get('#4').click().should('contain','O')
    cy.get('#6').click().should('contain','X')
    cy.get('#8').click().should('contain','O')
    cy.get('#7').click().should('contain','X') 

    //Verify message on game end. Add proper message once available. 
    cy.get('#endgame').should('be.visible')

  })
  
})

const data = require("../../cypress/fixtures/mobiledevices.json");

describe("Test mobile compatibiltiy", () => {
beforeEach(() => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
  })  

for (let mobileDeviceValue in data.mobiledevices) {
    it('Verifies mobile compatibility of game using ' + data.mobiledevices[mobileDeviceValue], () => {
  
      //Creates the playing board and all visibility is correct
      cy.viewport(data.mobiledevices[mobileDeviceValue])
      cy.get('#number').type('THREE') 
      cy.get('#start').click() //testing non-numeric characters
      cy.get('#number').clear()
      cy.get('#number').type('3').should ('have.value', '3')
      cy.get('#start').click()
      cy.get('table tr').should('have.length', 3)
      cy.get('#endgame').should('not.be.visible')
  
      //Plays the game
      cy.get('#0').click().should('contain','X')
      cy.get('#0').click().should('not.contain','O')
      cy.get('#1').click().should('contain','O')
      cy.get('#4').click().should('contain','X')
      cy.get('#5').click().should('contain','O')
      cy.get('#8').click().should('contain','X') 
  
      //Verify correct message on game end. 
      cy.get('#endgame').should('be.visible')

      cy.screenshot(data.mobiledevices[mobileDeviceValue])

    })
    }

    
    })

const urldata = require("../../cypress/fixtures/tictactoeurls.json");


beforeEach(() => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
  })

describe("Tests network requests", () => {
    for (let ticTacToeUrlsValue in urldata.tictactoeurls)  
    it('Verifies 200 response for ' + urldata.tictactoeurls[ticTacToeUrlsValue], () => {
    cy.request(urldata.tictactoeurls[ticTacToeUrlsValue]).should('have.property', 'status', 200)
     
    })
})