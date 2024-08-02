const {test,expect}=require('@playwright/test')
const exp = require('constants')
//const fs = require('fs');
 
test('Login Page Test',async({page})=>{
 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //hard assertions
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
   
    const loginCredentials=[
        {username:'admin',password:'admin123'},
        {username:'admin',password:''},
        {username:'',password:'admin123'},
        //{username:'',password:''}
    ]
    for(const credentials of loginCredentials){
    await page.getByPlaceholder('Username').fill(credentials.username)
    await page.getByPlaceholder('Password').fill(credentials.password)
    await page.getByRole('button',{name:'Login'}).click()
 
    // field error messgae locator
    const validationmessage = await page.locator('.oxd-input-field-error-message')
   
    if(await validationmessage.isVisible()){
        //await expect(validationmessage).toBeVisible()
        await expect(validationmessage).toHaveText('Required')
        console.log(`Validation message for credentials (username: "${credentials.username}", password: "${credentials.password}") is displayed as expected.`);
  } else {
    console.log(`Logged in successfully with credentials (username: "${credentials.username}", password: "${credentials.password}")`);
//     // Save storage state to a file
//         const storageState = await page.context().storageState();
//         fs.writeFileSync('storageState.json', JSON.stringify(storageState));
 
//   // Save session storage
//   const sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));
//   fs.writeFileSync('sessionStorage.json', sessionStorage, 'utf-8');
    //softassertions
    await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
    page.getByRole('menuitem',{name:'Logout'}).click();
    console.log(`Logged out successfully with credentials (username: "${credentials.username}", password: "${credentials.password}")`);
    }
    await page.reload();
}
})