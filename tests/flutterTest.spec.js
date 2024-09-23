import {test, expect} from '@playwright/test';
test('click on + sign',async ({page})=>{

    await page.goto('https://flutter-angular.web.app/');
    await page.waitForTimeout(5000);

    const addButton= page.locator('div.flutter-view >> role=button');
    await page.waitForTimeout(3000);

    await addButton.click();



})