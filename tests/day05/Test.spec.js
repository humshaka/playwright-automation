const { test, expect } = require('@playwright/test');

test.use({ channel: 'chrome' });

// Verify the page identity and check that every matching link is visible, enabled, and clickable.
test('all links under the ul are visible and clickable', async ({ page }) => {
  await page.goto('https://the-internet-5chk.onrender.com/');


  //Verify URL contains "/the-internet-5chk\.onrender/"
  await expect(page).toHaveURL(/the-internet-5chk\.onrender/);

  //Verify title is "Practice"
  await expect(page).toHaveTitle('Practice');

  //Verify all links under the ul tag are visible and clickable
  const links = page.locator("xpath=//ul[@class='list-group']//a");
  const linkCount = await links.count();

  expect(linkCount).toBeGreaterThan(0);

  for (let index = 0; index < linkCount; index++) {
    const link = links.nth(index);

    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
    await link.click({ trial: true });
  }
});