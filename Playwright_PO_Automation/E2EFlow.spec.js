const { test, expect } = require('@playwright/test');
const exp = require('constants');


test('AddingProductinCart', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    //----------------------------Login Screen ----------------------------
    const emailID = 'Miketest240611@yopmail.com';
    const productName1 = "ADIDAS ORIGINAL";
    const userEmail = page.locator("[id='userEmail']");
    const userPassword = page.locator("[id='userPassword']");
    const loginBtn = page.locator("#login");
    //Get all productTitle  present in page (Dashboard Screen)
    const productTitle = page.locator(".card-body");

    await userEmail.fill("Miketest240611@yopmail.com");
    // const EmailId = "Miketest240611@yopmail.com";
    // console.log("Email enter: " +  EmailId)
    await userPassword.fill("Admin@1234");
    await loginBtn.click();

    // After login validate the title
    console.log(await page.title());
    await page.waitForLoadState('networkidle');

    //console.log(await productTitle.first().textContent());
    const productTitleName = await page.locator(".card-body b").allTextContents();
    console.log(productTitleName);

    // -------section 25 Product Title for buying the product from Product window------------ //

    // To iterate the title name one by one we need to count the value in  array format by using the .count function and count value we store in one variable as array
    const count = await productTitle.count();
    for (let i = 0; i < count; i++) {
        // it start the index with O to validate the product title, to naviagte to child tag we used chaining locator and to extract the title name we use. textcontext();
        // by using the if condition we are comparing the product title is matching or not if matching we add in cart
        if (await productTitle.nth(i).locator("b").textContent() === productName1) {
            await productTitle.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    //------ section 26 add assertion buy product on Cart Screen------------- //

    await page.waitForLoadState('networkidle');
    //We add assertion to Validate the product add successfully or not on Add cart screen, we validate the with help of text locator and tag name
    // Cart icon
    await page.locator("[routerlink='/dashboard/cart']").click();

    //to load the page we used wait
    await page.locator("div li").first().waitFor();
    // with help to text locator we validate the product are added or not, isVisible to check is the product title is present or not, and it return bool value 
    //for this we create the variable store boolean value 
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    console.log(bool)

    // To validate the product title we assert the visible value and  used method .toBeTruthy
    await expect(bool).toBeTruthy();
    //await page.pause();

    await page.locator("text=Checkout").click();
    console.log(await page.title());


    // -------------Payment Method screen--------------------------------------- //

    // Credit Card info
    await page.locator("[class='input txt text-validated']").first().fill("4542 5599 0012 2293");

    //Month
    const firstDropdwn = page.locator('[class="input ddl"]').first();
    await firstDropdwn.selectOption('05');
    //await page.waitFor();

    //date
    const secondDropdwn = page.locator('[class="input ddl"]').last();
    await secondDropdwn.selectOption('15');

    //CVV
    await page.locator("[type='text']").nth(1).fill("425");

    //Name of Card
    await page.locator("[type='text']").nth(2).fill("Miketest");

    //Apply coupon
    await page.locator("[name='coupon']").fill("rahulshettyacademy");
    //Coupon button
    await page.locator("[type='submit']").click();
    await page.waitForLoadState('networkidle');

    const couponMsg = await page.locator("[class='mt-1 ng-star-inserted']").textContent();
    console.log(couponMsg);
    expect(await page.locator("[class='mt-1 ng-star-inserted']")).toContainText('* Coupon Applied');

    // Coupon message validating 
    const bool1 = await page.locator("[class='mt-1 ng-star-inserted']").isVisible();
    //const bool1 = await page.locator("text = Coupon Applied").isVisible();
    console.log(bool1)

//-----------------------------section 27 dropdown suggestion Shipping Information-----------------------------------------------------------------

    // In Auto suggestion drop down we used pressSequentially it help us to write the text one bye one
    await page.locator("[placeholder='Select Country']").pressSequentially("ind", { delay: 100 });
    // get dropdownwindow locator and store it in variable
    const dropDownWindow = page.locator(".ta-results");
    await dropDownWindow.waitFor();
    //Now to validate search value in dropdown option Window, we iterate the value by using the for loop
    const optionsValue = await dropDownWindow.locator("button").count();
    for (let i = 0; i < optionsValue; i++) {
        // this locator will iterate the dropdown option (Value) which are populate by searching "ind", get value of text and store in varaible
        const text = await dropDownWindow.locator("button").nth(i).textContent();
        // to check with the search option value in drop down we use if condition and it match we click on value
        if (text === ' India') {
            await dropDownWindow.locator("button").nth(i).click();
            console.log("Country " + text)
            break;
        }

    }
    //await page.pause();

    // to validate the Email which we used for login we used .toHavetext method
    expect(page.locator(".user__name [type='text']").first()).toHaveText(emailID);
    // const bool1 = await page.locator(".user__name [type='text']").toHaveText(emailID).isVisible();
    // console.log(bool1)

    // To validate the product title we assert the visible value and  used method .toBeTruthy
    //await expect(bool).toBeTruthy();

//-----------------------section 28 Fetching the oder id from Landing screen -----------------------------------------------//

    //Click on PlaceOrder button
    await page.locator(".action__submit").click();
    console.log(await page.title());

    // after order we validate the title 
    const orderConfirmationText = await page.locator("[class='hero-primary']").textContent();
    console.log(orderConfirmationText);
    await expect(page.locator("[class='hero-primary']")).toHaveText(" Thankyou for the order. ");

    // To get two Order id
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

//-----------------------------------section 30 find the order id from Order history page--------------------------//

    await page.locator("button[routerlink*='myorders']").click();
    //await page.page.locator("tbody").waitFor();
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    
    // first get parent locator and store it in variable
    const rows =  page.locator("tbody tr");
    for(let i=0;  i<await rows.count(); i++)
    {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        // regular expressin
        if(orderId.includes(rowOrderID))
            {
                await rows.nth(i).locator("button").first().click();
                console.log(await page.title());
                await expect(page).toHaveTitle("Let's Shop");
                break;
            }
    }
    // Validation order id on thank you for shopping screen
    const orderIdDetails = await page.locator("[class='col-text -main']").textContent();
    console.log(orderIdDetails);
    expect(orderId.includes(orderIdDetails)).toBeTruthy();



});