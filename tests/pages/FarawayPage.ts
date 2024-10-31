import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasicPage";
import { PageModel } from "../../interfaces/PageModel.inteface";
import { AuthComponent } from "./components/AuthComponent";
import { PurchaseComponent } from "./components/PurchaseComponent";
import { waitForPageEvent } from "../helpers/handler";

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
    settings: {
      blockchain: this.page.getByLabel("Blockchain"),
      token: this.page.locator("#coin"),
    },
    minting: {
      mintImage: this.page.locator("#mint-image"),
    },
    purchase: {
      imageUrlField: this.page.getByLabel("Image Url"),
      submitButton: this.page.locator("#purchase"),
    },
  } as const;

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.farawayConnect.title).toBeVisible();
  }

  async loginInNewTab(): Promise<void> {
    const newPage = await waitForPageEvent(this.page, "page", async () => {
      await this.selectors.farawayConnect.openInNewTab.click();
    });

    await this.authenticate(newPage);
  }

  async loginInPopup(): Promise<void> {
    const popup = await waitForPageEvent(this.page, "popup", async () => {
      await this.selectors.farawayConnect.openInPopup.click();
    });

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

  async isLogged(): Promise<boolean> {
    return this.selectors.farawayConnect.connectState.isVisible();
  }

  async changeBlockchain(
    blockchain: "SOLANA" | "ETHEREUM" | "POLYGON" | "APECHAIN",
    token: string
  ): Promise<void> {
    await this.selectors.settings.blockchain.selectOption(blockchain);
    await this.selectors.settings.token.fill(token);
  }

  async purchaseImageWithUrl(imageUrl: string): Promise<void> {
    await this.selectors.purchase.imageUrlField.fill(imageUrl);
    await this.selectors.purchase.submitButton.click({
      delay: 1000,
    });

    const frameLocator = this.page.frameLocator("iframe");

    const frame = new PurchaseComponent(frameLocator);
    await frame.verifyRequiredElementsPresent();
    await frame.connectWallet();

    // TODO: Implement the rest of the purchase flow
  }
}
