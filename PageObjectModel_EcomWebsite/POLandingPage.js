// const { test, expect } = require('@playwright/test');
// const exp = require('constants');
// exports.LandingPage = 
// class LandingPage
// {
//     constructor(page)
//     {
//         this.page = page;
//         this.orderConfirmationText =  page.locator("[class='hero-primary']");
//         this.orderIdText = page.locator(".em-spacer-1 .ng-star-inserted");
//         //this.addedProduct = page.locator("[class='line-item product-info-column m-3']")
//     }

//     async VerfiytheOrderConfimationtextMessga()
//     {
       
//         const orderConfirmationText = await this.orderConfirmationText.textContent()
//         console.log(orderConfirmationText)
//         await expect(this.orderConfirmationText).toHaveText(' Thankyou for the order. ')
//         const bool = await this.orderConfirmationText.isVisible();;
//         console.log(bool);
//     }

//     async VerfiyOrderIdText()
//     {
//         const orderIdText = await this.orderIdText.textContent();
//         console.log(orderIdText);
//         await expect(this.orderIdText).toHaveText(orderIdText)
//         const bool = await this.orderIdText.isVisible();
//         console.log(bool)
//     }
// }