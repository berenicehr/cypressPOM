import GamesForm from "./components/my_games";

class Homepage {
    //locators
    myGames = new GamesForm();
    get loginButton(){ return cy.get('[style="margin-right: 12px;"] > .MuiBox-root > .MuiButton-root')}
    get heartButton(){ return cy.get(':nth-child(3) > div > .MuiButton-root')}

    open(){ cy.visit('https://www.crazygames.com/')}
}

export default Homepage