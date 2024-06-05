import Homepage from "../../support/page_object/homepage"

describe('Homepage tests', () => {
    const homepage = new Homepage();
    beforeEach('', () => {
        homepage.open()
    })
    it('login button is visible', () => {
        homepage.loginButton.should('be.visible')
    })
    it('heart button is visible', () => {
        homepage.heartButton.should('be.visible')
    })
    it('validate heart button login', () => {
        homepage.heartButton.click()
        homepage.myGames.emailButton.click()
        homepage.myGames.fill({
            email: 'bere4758@gmail.com',
            password: 'bere4758'
        })
    })
})