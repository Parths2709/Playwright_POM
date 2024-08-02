const { test, expect } = require('@playwright/test');
 
test('Login Page Test', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 
  // Hard assertions
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
 
  const loginCredentials = [
    { username: 'admin', password: 'admin123' },
    { username: 'admin', password: '' },
    { username: '', password: 'admin123' },
    { username: '', password: '' },
  ];
 
  for (const credentials of loginCredentials) {
    await page.getByPlaceholder('Username').fill(credentials.username);
    await page.getByPlaceholder('Password').fill(credentials.password);
    await page.getByRole('button', { name: 'Login' }).click();
 
    const validationMessages = await page.locator('.oxd-input-field-error-message');
 
    if (await validationMessages.count() > 0) {
      for (let i = 0; i < await validationMessages.count(); i++) {
        const message = validationMessages.nth(i);
        await expect(message).toBeVisible();
        await expect(message).toHaveText('Required');
      }
      console.log(`Validation messages for credentials (username: "${credentials.username}", password: "${credentials.password}") are displayed as expected.`);
    } else {
      console.log(`Logged in successfully with credentials (username: "${credentials.username}", password: "${credentials.password}")`);
 
      // Soft assertions
      await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
      await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
      await page.getByRole('menuitem', { name: 'Logout' }).click();
      console.log(`Logged out successfully with credentials (username: "${credentials.username}", password: "${credentials.password}")`);
    }
 
    await page.reload();
  }
});