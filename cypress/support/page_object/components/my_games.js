class GamesForm {
    get create_account_text(){return cy.get(':nth-child(1) > [style="padding-left: 16px; padding-right: 16px;"] > .css-133kgpq')}
    get googleButton(){return cy.get('#gsi_189887_67757')}
    get facebookButton(){return cy.get(':nth-child(1) > [style="padding-left: 16px; padding-right: 16px;"] > [style="display: flex; justify-content: center; width: 100%; margin-top: 8px; flex-direction: column;"] > .MuiButton-root')}
    get emailButton(){return cy.get(':nth-child(1) > [style="padding-left: 16px; padding-right: 16px;"] > .css-133kgpq')}
    get email(){return cy.get('[style="position: relative; margin-bottom: 8px;"] > .MuiInput-root > .MuiInput-input')}
    get password(){return cy.get('[style="position: relative;"] > .MuiInput-root > .MuiInput-input')}
    // how to handle dropdowns 
    get dropdown(){return cy.get('#BloodGroup > e-float')}
    dropdownOption(group){return cy.get(`[data-value="${group}"]`)}
    selectRow(index){return cy.get(`[aria-rowindex="${index}"]`)}

    fill(options){
        if (options.email){
            this.email.type(options.email)
        }
        if (options.password){
            this.password.type(options.password)
        }
        // if (options.dropdown){
        //     this.dropdown.click();
        //     this.dropdownOption(option.dropdown).click()
        // }
    }
}

export default GamesForm