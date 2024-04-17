// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // await page.goto("https://zenhabits.net");

  await page.goto("https://www.netflix.com/gb/");

  await expect(page.getByRole("banner").locator("svg")).toBeVisible();

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByRole("button", { name: "Reject" }).click();

  await page.getByLabel("Email or phone number").fill("hello@hello.com");
  await page.getByLabel("Password").fill("hello@hello.com");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByLabel("Email or phone number").focus();

  await expect(page.getByRole("button", { name: "Reject" })).toBeVisible();

  // await expect(
  //   page.getByRole("heading", { name: "Honoring Your Word to Yourself" })
  // ).toBeVisible();

  // await expect(page.getByText("In his wonderful book, The")).toBeVisible();

  // await page.getByRole("link", { name: "about" }).click();

  // await expect(page.getByText("Zen Habits is about finding")).toBeVisible();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
