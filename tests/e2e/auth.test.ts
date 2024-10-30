import { test, expect } from "@playwright/test";
import { FarawayPage } from "../pages/FarawayPage";
import { validUser } from "../../test-data/userData";

interface LoginTestCase {
  title: string;
  loginAction: (page: FarawayPage) => Promise<void>;
}

test.describe("Auth flow", () => {
  let farawayPage: FarawayPage;

  const loginTestCases: LoginTestCase[] = [
    {
      title: "in the new tab",
      loginAction: (page) => page.loginInNewTab(),
    },
    {
      title: "in the same tab",
      loginAction: (page) => page.loginInSameTab(),
    },
    {
      title: "in the pop up",
      loginAction: (page) => page.loginInPopup(),
    },
  ];

  test.beforeEach(async ({ page }) => {
    farawayPage = new FarawayPage(page);
    await farawayPage.navigateTo();
    await farawayPage.verifyRequiredElementsPresent();
  });

  async function verifyUserEmailInConnectState(page: FarawayPage["page"]) {
    expect(async () => {
      const value = await page.locator("#connect-state").inputValue();
      try {
        const json = JSON.parse(value);
        return json.ok?.user?.email === validUser.email;
      } catch {
        return false;
      }
    }).toBeTruthy();
  }

  for (const { title, loginAction } of loginTestCases) {
    test(`should successfully login ${title}`, async ({ page }) => {
      await loginAction(farawayPage);
      await verifyUserEmailInConnectState(page);
    });
  }
});
