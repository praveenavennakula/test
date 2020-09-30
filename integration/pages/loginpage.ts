import {Toolbar} from './toolbar_functions'
describe('The Home Page_mobileview',()=>
{
    var log=new Toolbar();
    beforeEach(()=>{
        log.vist_baseurl();
        log.validate_url();
    })
    it('home page successfully loaded', () =>{
     })
    it('user successfully logged in', () =>{
        log.click_login_desktop();
        log.login_with_credentials();
    })

    it('user unsuccessfull login attempt1 with incorrect_username_and_incorrect_password', () =>{
        log.click_login_desktop();
        log.login_with_incoreect_credentials();
        cy.get('.kc-feedback-text').contains('Invalid username or password.').should('be.visible')
    })
    
    it('user unsuccessfull login attempt2 with correct_username_and_incorrect_password', () =>{
        log.click_login_desktop();
        log.login_with_incoreect_password_credentials();
        cy.get('.kc-feedback-text').contains('Invalid username or password.').should('be.visible')
    })

    it('user unsuccessfull login attempt3 with incorrect_username_and_correct_password', () =>{
        log.click_login_desktop();
        log.login_with_incoreect_username_credentials();
        cy.get('.kc-feedback-text').contains('Invalid username or password.').should('be.visible')
    })

})