import {Toolbar} from './toolbar_functions'

describe('The Home Page_Desktopview',()=>
{
  var tool= new Toolbar()
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
    tool.vist_baseurl();
    tool.validate_url();
       
    //cy.viewport(1920, 1080)
  })
   it('successfully loaded',()=>{

   })
    
   

 it('check vantashala icon is clickable', () =>{
    
       tool.click_vantashala_icon();
 })

 it('check MY CART is clickable', () =>{
  
  tool.check_MYCART_clickable_desktop();
  cy.url().should('include','/Cart')
    
  
})

it('check MY CHEFS is clickable', () =>{

  tool.check_MYCHEFS_clickable_desktop();
    
  
})
it('check MY ORDERS is clickable', () =>{
  
  tool.check_MYORDERS_clickable_desktop();
})
it('check STREAMING button is visible', () =>{
 
  tool.check_STREAMING_visible();
})


it('check all countries are clickable at toolbar', () =>{
  
  tool.check_all_countries_clickable_desktop();
})

//  it('install app is clickable', () =>{
//   cy.get('.gradient-text').contains('Install App').click();
    
//     })

    it('login is clickable', () =>{
    tool.click_login_desktop();
    tool.login_with_credentials();
    tool.validate_url();
      
     })

     it('After login navigation drawer is clickable', () =>{
      tool.click_login_desktop();
      tool.login_with_credentials();
      tool.validate_url();
       tool.click_user_navigation_drawer_desktop();
       //tool.click_logout();
           })

      it('MYORDERS in navigation drawer is clickable', () =>{
        tool.click_login_desktop();
        tool.login_with_credentials();
        tool.validate_url();
        tool.click_user_navigation_drawer_desktop();
        tool.check_MYORDERS_clickable_mobile();
        //tool.click_logout();
  })

  it('MYCHEFS in navigation drawer is clickable', () =>{
    tool.click_login_desktop();
    tool.login_with_credentials();
    tool.validate_url();
    tool.click_user_navigation_drawer_desktop();
    tool.check_MYCHEFS_clickable_mobile();
    //tool.click_logout();
  })

  it('MYCART in navigation drawer is clickable', () =>{
    tool.click_login_desktop();
    tool.login_with_credentials();
    tool.validate_url();
    tool.click_user_navigation_drawer_desktop();
    tool.check_MYCART_clickable_mobile();
    cy.wait(1000)
    cy.url().should('include','/Cart')
    tool.click_user_navigation_drawer_desktop();
    //tool.click_logout();

  })
  it('check all countries are clickable at Navigation drawer', () =>{
    tool.click_login_desktop();
    tool.login_with_credentials();
    tool.validate_url();
    tool.click_user_navigation_drawer_desktop();
    tool.check_all_countries_clickable_mobile();
    //tool.click_logout();
  })

  it('logout in  Navigation drawer is clickable', () =>{
    tool.click_login_desktop();
    tool.login_with_credentials();
    tool.validate_url();
    tool.click_user_navigation_drawer_desktop();
    tool.click_logout();
  })

  
 
 
    
 
})
