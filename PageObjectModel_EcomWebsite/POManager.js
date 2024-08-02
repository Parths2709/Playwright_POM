const { CartPage } = require("./POCartPage");
const { HomePage } = require("./POHomePage");
const { LoginPage } = require("./POLoginPage");
const { OrderHistorPage } = require("./POOrderHistoryPage");
const { PlaceOrderPage } = require("./POPlaceOrderPage");
const { ShippingInformation } = require("./POShippingInformation");
exports.POManager = 
class POManager
{
    constructor(page)
    {   
        this.page = page;
        this.login = new LoginPage(this.page)
        this.home = new HomePage(this.page);
        this.cart = new CartPage(this.page);
        this.placeorder = new PlaceOrderPage(this.page);
        this.shipping = new ShippingInformation(this.page);
        this.orderHistory = new OrderHistorPage(this.page);
    }

    getloginPage()
    {
        return this.login;
    }

    gethomePage()
    {
        return this.home;
    }
    getCartPage()
    {
        return  this.cart;
    }
    getPlaceOrderpage()
    {
        return this.placeorder;
    }
    getShippingPage()
    {
        return  this.shipping;
    }
    getOrderHistoryPage()
    {
        return this.orderHistory;
    }

}