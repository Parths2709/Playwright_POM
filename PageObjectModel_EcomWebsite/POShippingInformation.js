const {test,expect } = require("@playwright/test");
exports.ShippingInformation = 
class ShippingInformation
{
    constructor(page) 
    {
        this.page = page;
        this.UserEmail = page.locator(".user__name [type='text']").first();
        this.CountryInput = page.locator("[placeholder*='Country']");
        this.Dropdwonvalue = page.locator(".ta-results");
        this.PlaceOrderbutton = page.locator(".action__submit");

        this.orderConfirmationText = page.locator("[class='hero-primary']");
        this.OrderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async VerifytheUserEmail()
    {
        await expect(this.UserEmail).toHaveText('Miketest240611@yopmail.com')
        const UserEmail = await this.UserEmail.textContent()
        console.log("Resigter User Email: " + UserEmail)
    }

    async SelectCountryValuefromDropDown(Countrycode, CountryName)
    {   
        await this.CountryInput.type(Countrycode,{delay:100});
        await this.Dropdwonvalue.waitFor();
        const optionsValue = await this.Dropdwonvalue.locator("button").count();
        for (let i = 0; i < optionsValue; i++) 
        {
        // this locator will iterate the dropdown option (Value) which are populate by searching "ind", get value of text and store in varaible
        const text = await this.Dropdwonvalue.locator("button").nth(i).textContent();
        // to check with the search option value in drop down we use if condition and it match we click on value
        if (text === CountryName) 
            {
                await this.Dropdwonvalue.locator("button").nth(i).click();
                console.log("Country: " + text)
                break;
            }

        }
    }

    async PlaceOrderBtn()
    {
        await this.PlaceOrderbutton.click();
    }

    async VerfiytheOrderConfimationtextMessga()
    {
       
        const orderConfirmationText = await this.orderConfirmationText.textContent();
        console.log("Order Conformation message: " + orderConfirmationText)
        await expect(this.orderConfirmationText).toHaveText(' Thankyou for the order. ')
        const bool = await this.orderConfirmationText.isVisible();;
        console.log(bool);
    }

    async VerfiyOrderIdText()
    {
        const HomePageorderId = await this.OrderId.textContent();
        console.log("Order ID: " +  HomePageorderId);
        await expect(this.OrderId).toHaveText(HomePageorderId)
        const bool = await this.OrderId.isVisible();
        console.log(bool)
        return await this.OrderId.textContent();
    }
}