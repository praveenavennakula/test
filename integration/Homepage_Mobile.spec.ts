import {Toolbar} from './toolbar_functions'
describe('The Home Page_mobileview',()=>
{
    var tool= new Toolbar()
    var motog: number[]=[720,1280];
    var onplus:number[]=[480,853];
    var vivo:number[]=[360,640];
    var preset_name=['ipad-2','iphone-6+','samsung-note9','samsung-s10',motog,onplus,vivo]
   
    preset_name.forEach((preset_n:any) => {
    it(`on Device ${preset_n} home page successfully loaded`, () =>{
      if (Cypress._.isArray(preset_n)) {
         cy.viewport(preset_n[0], preset_n[1])
         preset_name
       } else {
         cy.viewport(preset_n)
       }
       tool.vist_baseurl();
         
    })


    it(`on Device ${preset_n} homepage vantashala icon is clickable `,()=>{
        if (Cypress._.isArray(preset_n)) {
            cy.viewport(preset_n[0], preset_n[1])
        //cy.get('.v-overlay__scrim').click();  //enable ater testing nav draw outside click works
        //tool.vist_baseurl();    //delete after testing nav draw outside click works
      tool.click_vantashala_icon();
    } else {
        cy.viewport(preset_n)
       //cy.get('.v-overlay__scrim').click();  //enable ater testing nav draw outside click works
        //tool.vist_baseurl();    //delete after testing nav draw outside click works
      tool.click_vantashala_icon();
    }
    })
   

    it(`on Device ${preset_n} all countries are clickable`, () =>{
      if (Cypress._.isArray(preset_n)) {
         cy.viewport(preset_n[0], preset_n[1])
         tool.vist_baseurl();
         cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
         cy.get('.v-navigation-drawer__content').should('not.be.hidden')
         cy.log("navigation drawer is clickable")
        tool.check_all_countries_clickable_mobile();
       } else {
         cy.viewport(preset_n)
         tool.vist_baseurl();
         cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
         cy.get('.v-navigation-drawer__content').should('not.be.hidden')
         cy.log("navigation drawer is clickable")
         tool.check_all_countries_clickable_mobile();
       }
      
     })


     it(`on Device ${preset_n} MYORDERS is clickable`, () =>{
        if (Cypress._.isArray(preset_n)) {
           cy.viewport(preset_n[0], preset_n[1])
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYORDERS_clickable_mobile();
         } else {
           cy.viewport(preset_n)
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYORDERS_clickable_mobile();
         }
        
       })
     
       it(`on Device ${preset_n} MYCHEFS is clickable`, () =>{
        if (Cypress._.isArray(preset_n)) {
           cy.viewport(preset_n[0], preset_n[1])
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYCHEFS_clickable_mobile();
         } else {
           cy.viewport(preset_n)
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYCHEFS_clickable_mobile();
         }
        
       })
       it(`on Device ${preset_n} MYCART is clickable`, () =>{
        if (Cypress._.isArray(preset_n)) {
           cy.viewport(preset_n[0], preset_n[1])
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYCART_clickable_mobile();
         } else {
           cy.viewport(preset_n)
           tool.vist_baseurl();
           cy.get('.hidden-md-and-up > .v-btn__content > .v-icon').should('be.visible').click();
           cy.get('.v-navigation-drawer__content').should('not.be.hidden')
           cy.log("navigation drawer is clickable")
           tool.check_MYCART_clickable_mobile();
         }
        
       })
     
    })
   
    
})
