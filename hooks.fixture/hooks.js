const { test, expect } = require('@playwright/test');


test.beforeAll(async ({ page }) => {
  context = await browser.newContext(); 
  page = await context.newPage(); 
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("[id='userEmail']").fill("Miketest240611@yopmail.com")
  await page.locator("[id='userPassword']").fill("Admin@1234")
  await page.locator("#login").click(); // Click login button
  //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 
});