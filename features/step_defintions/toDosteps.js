const { Given, When, Then, After } = require('cucumber');
const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

Given('I login to ToDO app', async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
    await this.driver.get('https://todomvc.com/examples/react/#/');
});

Then('I enter the list of items', async function () {
    let toDOList = await this.driver.findElement(By.className('new-todo'));

    await toDOList.sendKeys('Print notes', Key.RETURN)
    await toDOList.sendKeys('Call WIFI provider', Key.RETURN)
    await toDOList.sendKeys('Buy groceries', Key.RETURN)
    await toDOList.sendKeys('Pack for trip', Key.RETURN)
    await toDOList.sendKeys('Shopping', Key.RETURN)
    await toDOList.sendKeys('Transfer money', Key.RETURN)
    console.log("************List Added************")
});

 Then('I can select Active items', async function () {
    let activeList = await this.driver.findElement(By.linkText('Active'));
    await activeList.click();
  });

 Then('I can mark items as completed', async function () {
    let complete = await this.driver.findElement(By.className('toggle'));
    await complete.click(0);
  });

 Then('I can see Completed items', async function () {
   await this.driver.findElement(By.linkText('Completed')).click();

  });

 Then('I clear completed items', async function () {
   await this.driver.findElement(By.className('clear-completed')).click();
  });

After(async function() {
    this.driver.close();
});