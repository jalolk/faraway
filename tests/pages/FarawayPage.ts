import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasicPage";
import { PageModel } from "../../interfaces/PageModel.inteface";
import { AuthComponent } from "./components/AuthComponent";

export class FarawayPage extends BasePage implements PageModel {
  constructor(page: Page) {
    super(page);
  }

  readonly selectors = {
    farawayConnect: {
      title: this.page.getByRole("heading", { name: "Faraway Connect" }),
      openInNewTab: this.page.getByRole("button", {
        name: "Connect in new tab",
      }),
      openInSameTab: this.page.getByRole("button", {
        name: "Connect in same tab",
      }),
      openInPopup: this.page.getByRole("button", { name: "Connect in popup" }),
      connectState: this.page.locator("#connect-state"),
    },
  } as const;

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.farawayConnect.title).toBeVisible();
  }

  async loginInNewTab(): Promise<void> {
    const newPagePromise = new Promise<Page>((resolve) => {
      this.page.context().on("page", async (newPage: Page) => {
        await newPage.waitForLoadState();
        resolve(newPage);
      });
    });

    await this.selectors.farawayConnect.openInNewTab.click();

    const newPage = await newPagePromise;

    await this.authenticate(newPage);
  }

  async loginInPopup(): Promise<void> {
    const popupPromise = new Promise<Page>((resolve) => {
      this.page.on("popup", async (popup: Page) => {
        await popup.waitForLoadState();
        resolve(popup);
      });
    });

    await this.selectors.farawayConnect.openInPopup.click();

    const popup = await popupPromise;

    await this.authenticate(popup);
  }

  async loginInSameTab(): Promise<void> {
    await this.selectors.farawayConnect.openInSameTab.click();

    await this.authenticate(this.page);
  }

  async authenticate(page: Page): Promise<void> {
    const authComponent = new AuthComponent(page);
    await authComponent.verifyRequiredElementsPresent();

    await authComponent.login();
  }
}
