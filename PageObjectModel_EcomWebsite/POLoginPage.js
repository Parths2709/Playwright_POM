exports.LoginPage = 
class LoginPage
{
    constructor(page) // Use page fixture as parameter and same page fixture we are going to refer to locate the element
    {
        //we will maintain all locator of page inside constructor
        this.page = page;
        this.usernameInput = page.locator("#userEmail");
        this.passwordInput = '#userPassword';
        this.loginBtn = '#login';
    }

    //Method In Playwright with JavaScript, a method refers to a function or action that you can call to interact with elements on a web page or perform operations within a browser context
    //Whenever we call this method from actual test this will launch application
    async gotoLoginPage()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/")
    }

    //create one more method to pass the test data, we pass the parameter from test cases to login into application
    async login(username, password)
    {
        await this.usernameInput.fill(username);
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginBtn).click();
        //await this.page.pause();
    }

}
// TO make the class available for whole framework we will export the class
