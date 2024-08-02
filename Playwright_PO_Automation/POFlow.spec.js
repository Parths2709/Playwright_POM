// const { test, expect } = require('@playwright/test');
// // to initialize from where the object is coming we are importing the class
// const {LoginPage} = require('../PageObjectModel/POLoginPage');
// const {DashboardPage } = require('../PageObjectModel/PODashboardPage');
// const { CartPage } = require('../PageObjectModel/POCartPage');




// test('Page Object Model', async ({ page }) => {

//     //----------------------------Login Screen ----------------------------
//     // create the object for Loginpage class
//     const userEmail = "Miketest240611@yopmail.com";
//     const password = "Admin@1234"
//     const productName1 = "ADIDAS ORIGINAL";
//     const productTitle = page.locator(".card-body");
//     const loginPage = new LoginPage(page) // this page value is coming from constructor
//     await loginPage.goToURL();
//     await loginPage.ValidLogin(userEmail,password);

//     //---------------------------Dashboard screen------------------------------
//     const dashboardPage = new DashboardPage(page)
//     await dashboardPage.searchProductAddto(productName1)
//     await dashboardPage.navigateToCart();

//     //------------------------------CartPage-----------------------------
//     const cartpage = new CartPage(page)
//     cartpage.VerfiyAddedProductIsVisible(productName1);
//     cartpage.Checkout();
    

//     //------ section 26 add assertion buy product on Cart Screen------------- //

//     // await page.waitForLoadState('networkidle');
//     // //We add assertion to Validate the product add successfully or not on Add cart screen, we validate the with help of text locator and tag name
//     // // Cart button
//     // //await page.locator("[routerlink='/dashboard/cart']").click();

//     // //to load the page we used wait
//     // await page.locator("div li").first().waitFor();
//     // // with help to text locator we validate the product are added or not, isVisible to check is the product title is present or not, and it return bool value 
//     // //for this we create the variable store boolean value 
//     // const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
//     // console.log(bool)

//     // // To validate the product title we assert the visible value and  used method .toBeTruthy
//     // await expect(bool).toBeTruthy();
//     //await page.pause();
// });