import { test ,expect } from '@playwright/test';

test.describe('Test Group', () => {

    //create beforeEach to navigate to https://the-internet-5chk.onrender.com/.
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet-5chk.onrender.com/');

    expect(await page.title()).toBe("Practice");

   

    

    
 });

  test('Verify checkboxes are checked', async ({ page }) => {

   await page.getByText("Checkboxes").click();

   let firstCheckbox = page.locator("input#box1");
   let secondCheckbox = page.locator("input#box2");

   await firstCheckbox.check();
   await secondCheckbox.check();

   await expect (firstCheckbox).toBeChecked();
   await expect (secondCheckbox).toBeChecked();

   console.log("=========================================")

   
   expect(await firstCheckbox.isChecked() ).toBeTruthy();
   expect(await secondCheckbox.isChecked() ).toBeTruthy();
   


  });

  console.log("==============================================");

  test('Verify checkboxes are unchecked', async ({ page }) => {
  
  await page.getByText("Checkboxes").click();



  let firstCheckbox = page.locator("input#box1");
  let secondCheckbox = page.locator("input#box2");

  await firstCheckbox.uncheck();
  await secondCheckbox.uncheck();

  //expect(firstCheckbox).not.toBeChecked();   //asseration tobechecked 
  //expect(secondCheckbox).not.toBeChecked();

  console.log("================================================")

  expect(await firstCheckbox.isChecked()).toBeFalsy();
  expect(await secondCheckbox.isChecked()).toBeFalsy(); // Asseration to be flasy 

});

console.log("=====================================================")

  test('Verify text of the element', async ({ page }) => {

    let headerElementt =  page.locator("span.h1y"); 

    await expect( headerElementt).toHaveText("Test Automation Practice");

    let actualText = await headerElementt.innerText();
    
    expect(actualText).toEqual("Test Automation Practice");





  });
});