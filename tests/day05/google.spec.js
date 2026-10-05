const { test, expect } = require('@playwright/test');

test.use({ channel: 'chrome' });

test('search CYDEO on Google', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle('Google');

  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('CYDEO');
  await searchBox.press('Enter');

  await expect(page).toHaveTitle(/CYDEO/i);
});