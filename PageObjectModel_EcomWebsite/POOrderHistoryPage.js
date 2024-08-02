const {test,expect } = require("@playwright/test");
exports.OrderHistorPage = 
class OrderHistorPage
{
    constructor(page)
    {
        this.page = page;
        this.OrderTextbutton = page.locator("li [routerlink='/dashboard/myorders']")
        this.orderTable = page.locator("tbody");
        this.OrderHistoryPage_orderId = page.locator("tbody tr");
        this.orderSummaryPage_orderID = page.locator("[class='col-text -main']");
       // this.OrderId = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async SearchAndValidateAddedProduct(OrderId)
    {
        await this.OrderTextbutton.click();
        await this.orderTable.waitFor();              
        for(let i=0;i <await this.OrderHistoryPage_orderId.count(); i++)
        {
            //await this.rowOrderId.waitFor();
            //const rowOrderId = await this.row.nth(i).locator("th").textContent();
            const rowOrderId = await this.OrderHistoryPage_orderId.nth(i).locator("th").textContent(); 
            if(OrderId.includes(rowOrderId))
                {
                    await this.OrderHistoryPage_orderId.nth(i).locator("button").first().click();
                    break;
                }
        }    
        
    }
    async validateOrderIDOnSummaryPage()
    {
        //const orderSummaryPage_orderID = await this.orderSummaryPage_orderID.textContent()
        const orderSummaryPage_orderID = await this.orderSummaryPage_orderID.textContent();
        console.log("OrderId on History Page: " + orderSummaryPage_orderID)
        //await expect(this.orderSummaryPage_orderID).toHaveText(this.OrderId)
        const bool = await this.orderSummaryPage_orderID.isVisible();;
        console.log(bool);
    }

}