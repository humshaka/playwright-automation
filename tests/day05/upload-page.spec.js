import { expect, test } from '@playwright/test';
import path from 'path';

test('File can be uploaded', async ({ page }) => {
    await page.goto('https://the-internet-5chk.onrender.com/upload');

    await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();

    const filePath = path.join(__dirname, 'uploads', 'Test-upload.txt');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.getByRole('button', { name: 'Upload' }).click();

    await expect(page.getByText('File Uploaded')).toBeVisible();
});
