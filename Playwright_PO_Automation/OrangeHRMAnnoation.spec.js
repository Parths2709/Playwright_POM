const { test, expect } = require('@playwright/test');
 
let page;
 
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('[name="username"]', 'admin');
  await page.fill('[name="password"]', 'admin123');
  await page.click('[type="submit"]');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});
 
test.afterAll(async () => {
  await page.click('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
  await page.click('text=Logout');
  await page.close();
});
test.describe('two tests', () => {
test('Homepage test', async () => {
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();
  await expect(page.locator('[alt="client brand banner"]')).toBeVisible();
});
 
 
test('Homepage', async () => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
  await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();
  await expect(page.locator('[alt="client brand banner"]')).toBeVisible();
});
 
});
 