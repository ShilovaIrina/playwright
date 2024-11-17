const { email, password} = require("../user");
import { test, expect } from '@playwright/test';


test("test valid authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator("[data-testid='profile-programs-content']"));
});

test("test nevalid authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').fill("ivan123@mail.ru");
  await page.getByPlaceholder('Пароль').fill("123");
  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator("[data-testid='login-error-hint']")).toContainText("Вы ввели неправильно логин или пароль.");
});