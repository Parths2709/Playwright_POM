const {test,expect } = require("@playwright/test");
exports.PlaceOrderPage =
class PlaceOrderPage
{
    constructor(page) 
    {
        this.page = page; 
        this.CreditCardNoInput = page.locator("[class='input txt text-validated']").first();
        this.monthdropdownSelect = page.locator('[class="input ddl"]').first();
        this.yeardropdownSelect = page.locator('[class="input ddl"]').last();
        this.CCVNoInput = page.locator("[type='text']").nth(1)
        this.NameofCardInput = page.locator("[type='text']").nth(2)
        this.applycouponInput = page.locator("[name='coupon']")
        this.applycouponbutton = page.locator("[type='submit']")
        this.couponMsg =  page.locator("[class='mt-1 ng-star-inserted']")
        this.couponmsgValidate = page.locator("[class='mt-1 ng-star-inserted']")
    }

    async EnterPaymentdetails(credtiCardNo, monthdropdown, yeardropdown,CCVno, NameofCard)
    {
        await this.CreditCardNoInput.fill(credtiCardNo)
        await this.monthdropdownSelect.selectOption(monthdropdown)
        await this.yeardropdownSelect.selectOption(yeardropdown)
        await this.CCVNoInput.fill(CCVno);
        await this.NameofCardInput.fill(NameofCard);
        //await this.NameofCardInput().fill(NameofCard);
    }

   async ApplyCoupon(applycoupon)
    {
        await this.applycouponInput.fill(applycoupon)
        await this.applycouponbutton.click()
    }

    async VerfiyTheCouponMsgIsvisible()
    {
        const couponmsgValidate = await this.couponmsgValidate.textContent()
        console.log("Coupon Message: " + couponmsgValidate)
        await expect(this.couponmsgValidate).toHaveText('* Coupon Applied')
        const bool = await this.couponmsgValidate.isVisible();;
        console.log(bool);

    }

    
}