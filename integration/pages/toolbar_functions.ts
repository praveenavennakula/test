/// <reference types="Cypress" />
export class Toolbar{

    vist_baseurl(){
        cy.visit('http://www.vantashala.com/')
                    }
    validate_url(){
        cy.title().should('eq','VantaShala | Organic Home Chef')
        cy.location('protocol').should('eq','https:')
    }
    click_vantashala_icon(){
       
        cy.get('a > .v-image > .v-responsive__content').should('be.visible').click();
       this.validate_url()
    
    }
 
    click_login_desktop(){
    //cy.get('.v-navigation-drawer__content').should('be.hidden')
    cy.get('.v-avatar > .v-icon').should('be.visible').click()
    cy.url().should('include','/auth/realms/VantaShala/')

    //cy.get('.v-navigation-drawer__content').should('not.be.hidden')
    }
    login_with_credentials(){
      
     cy.get('#username').should('have.attr','name','username').type('tech@vantashala.com');
     cy.get('#password').should('have.attr','name','password').type('vantashala');
     cy.get('#kc-login').should('have.attr','type','submit').click();
           
    }
    login_with_incoreect_credentials(){
      
        cy.get('#username').should('have.attr','name','username').type('xyz@gmail.com');
        cy.get('#password').should('have.attr','name','password').type('xyz');
        cy.get('#kc-login').should('have.attr','type','submit').click();
              
       }

       login_with_incoreect_password_credentials(){
        cy.get('#username').should('have.attr','name','username').type('tech@vantashala.com');
        cy.get('#password').should('have.attr','name','password').type('xyz');
        cy.get('#kc-login').should('have.attr','type','submit').click();
              
       }

       login_with_incoreect_username_credentials(){
        cy.get('#username').should('have.attr','name','username').type('xyz@vantashala.com');
        cy.get('#password').should('have.attr','name','password').type('vantashala');
        cy.get('#kc-login').should('have.attr','type','submit').click();
              
       }
      click_user_navigation_drawer_desktop(){
        cy.get('.v-navigation-drawer__content').should('be.hidden')
        cy.get('.v-avatar > .v-icon').should('be.visible').click()
        cy.get('.v-navigation-drawer__content').should('not.be.hidden')
      }

       check_all_countries_clickable_desktop(){
        let country_name: string[]=['USA','INDIA','SINGAPORE','MALAYSIA','CANADA'];
        
         for(let country of country_name){
            cy.get('.v-btn__content > .dropdown-select').select(country).invoke('val').should('eq',country)
                    
         }
         
         }
         check_all_countries_clickable_mobile(){
            let country_name: string[]=['USA','INDIA','SINGAPORE','MALAYSIA','CANADA'];
            
            for(let country of country_name){
                
             cy.get('.dropdown > .dropdown-select').select(country).invoke('val').should('eq',country)
            
            
               }
    
            }
            check_MYCART_clickable_desktop(){
                cy.get(':nth-child(3) > .ma-auto > .v-btn__content > .gradient-text').contains('My Cart').should('be.visible').click()
            }

            check_MYCHEFS_clickable_desktop(){
                cy.get(':nth-child(2) > .ma-auto > .v-btn__content > .gradient-text').contains('My Chefs').should('be.visible').click()
            }
            check_MYORDERS_clickable_desktop(){
                cy.get('.v-toolbar__items.hidden-sm-and-down > :nth-child(1) > .ma-auto > .v-btn__content').contains('My Orders').should('be.visible').click()
            }
            check_STREAMING_visible(){
                cy.get(':nth-child(4) > .v-badge > .ma-auto > .v-btn__content').contains('Streaming').should('be.visible')
                
            }
            check_MYCART_clickable_mobile(){
                cy.get('.v-navigation-drawer__content > :nth-child(3) > :nth-child(4)').contains('My Cart').should('be.visible').click()

            }

            check_MYCHEFS_clickable_mobile(){
                cy.get('.v-navigation-drawer__content > :nth-child(3) > :nth-child(3)').contains('My Chefs').should('be.visible').click()
            }
            check_MYORDERS_clickable_mobile(){
                cy.get('.v-navigation-drawer__content > :nth-child(3) > :nth-child(2)').contains('My Orders').should('be.visible').click();
                
            }
            click_logout(){
                cy.get(':nth-child(7) > .v-list-item').should('be.visible').click();
                
                }
}