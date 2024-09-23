import {test, expect} from '@playwright/test';
import exp from 'constants';
test('Add new product', async ({page})=> {

    test.setTimeout(90000);

    await page.goto('http://e-commerce-kib.netlify.app/');
    await page.waitForTimeout(5000);

    //add item
    await page.click('div.add-product a[href="/add"]');
    await page.waitForTimeout(5000);
    await page.fill('input[name="title"]',"Amazing tshirt");
    await page.waitForTimeout(5000);

    await page.fill('input[name="description"]',"This is for testing purpose...");
    await page.fill('input[name="price"]',"1000");
    const createButton = page.getByText('Create Product');

    await createButton.click();
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 700);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 700);
    await page.mouse.wheel(0, 700);




    const product =  page.locator('div.product-name:has-text("Amazing tshirt")');
    await page.waitForTimeout(3000);
    await product.isVisible(); 
    await page.waitForTimeout(3000);

    //update item

    await expect(product).toBeVisible();

    await page.click('a[href="/edit/amazing-tshirt"]');
    await page.waitForTimeout(5000);

    //await page.waitForSelector('input[name="description"]', { state: 'visible' });  

    await page.fill('input[name="title"]',"Amazing tshirt update");
    await page.waitForSelector('input[name="description"]', { state: 'visible' });  
    await page.getByText('Save Product').click();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 800);
    await page.mouse.wheel(0, 700);
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(9000);
    

    const productUpdate =  page.locator('div.product-name:has-text("Amazing tshirt update")');
    await page.waitForTimeout(3000);
    await product.isVisible();
    await page.waitForTimeout(3000);

    await expect(productUpdate).toBeVisible();

    //delete item
    await page.waitForTimeout(3000);
    await page.locator('div.product-name:has-text("Amazing tshirt update")').locator('xpath=..').locator('button.remove-product').click();
    //assert its deleted
    await expect(page.locator('div.product-name:has-text("Amazing tshirt update")')).toHaveCount(0);

    //search
    const searchInput = page.locator('input[class*="search-product"]');
    await searchInput.fill('Sleek Fresh Pizza');
    await page.waitForTimeout(3000);
    const productExists = await page.isVisible('div.product-name:has-text("Sleek Fresh Pizza")');
    expect(productExists).toBe(true);

    await searchInput.fill('salad');
    





    

    







});
