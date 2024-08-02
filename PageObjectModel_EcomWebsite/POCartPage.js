const {test,expect } = require("@playwright/test");
exports.CartPage =
class CartPage 
{
    constructor(page)
    {
        this.page = page; 
        this.AddedProduct = page.locator("h3:has-text('IPHONE 13 PRO')");
         //this.checkout = page.locator("text=Checkout");
         this.checkoutbtn = page.locator("text=Checkout");
    }

    async checkProductIncart()
    {
        
        const productElement = await this.AddedProduct.textContent();
        console.log("Added Product: " + productElement)
        const bool1 = await this.AddedProduct.isVisible();
        expect(bool1).toBeTruthy();
        // console.log(bool1);

       
    }
    async checkoutbutton()
    {
        await this.checkoutbtn.click();
    }

    // getProductLocator(productName1)
    // {
    //     return  this.page.locator("h3:has-text('"+productName1+"')");
    // }
}