/// <reference types="Cypress" />
import {Toolbar} from '../toolbar_functions'
describe('The Home Page',()=>
{
   it('Desktop View', () => { 
    let tb2=new Toolbar();
    tb2.vist_baseurl();
    cy.location().then((loc) => {
        console.log(loc)
      })
    cy.get(':nth-child(1) > .v-card > :nth-child(2) > .v-btn > .v-btn__content').click({force:true});
    cy.log('our menu is clickable');
    cy.get('.xs12 > :nth-child(2) > .row > :nth-child(1) > .v-card > :nth-child(3) > .v-btn > .v-btn__content').click({force:true})
     cy.log('HOW IT WORKS is clickable')
     cy.get(':nth-child(2) > .v-card > :nth-child(2) > .v-btn > .v-btn__content').click({force:true})
    cy.log('KITCHENWARE is clickable')
    cy.get(':nth-child(2) > .v-card > :nth-child(3) > .v-btn > .v-btn__content').click({force:true})
    cy.log('FAQ is clickable')

    cy.get('.xs12 > :nth-child(1) > .v-card__text > :nth-child(1) > .v-btn__content').click({force:true})
    cy.log('facebook is clickable')

      cy.get('#iMenus').click();
      cy.log('explore menus is clickable')
     // cy.get(':nth-child(3) > .ma-0 > .v-btn').click({force:true});
     // cy.get(':nth-child(3) > .ma-0 > .v-btn > .v-btn__content').click({force:true});
      //cy.log('view more menu button is clickable')
      //cy.get('.v-card__actions > .ma-auto > .v-btn__content').click({force:true});
      //cy.log('subscribe is clickable')


/*    cy.window().then((win) => {
        console.log(win.location)
               
      })*/
   // cy.get('.v-overlay__scrim').click({multiple:true, force: true })
    //cy.get('v-overlay__content').click();
    //cy.get('.v-navigation-drawer__content').should('be.hidden')
    //cy.get('.v-list-item > .v-btn > .v-btn__content > .v-icon')
    //cy.get('aside[class="v-navigation-drawer v-navigation-drawer--absolute v-navigation-drawer--close v-navigation-drawer--is-mobile v-navigation-drawer--temporary theme--light green lighten-2"]').click();
    //cy.get('.v-list-item > .v-btn > .v-btn__content > .v-icon').should('be.visible').click();
    //tb2.click_nav_draw_cont_desktop();

})
})
