import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasicPage";
import { PageModel } from "../../interfaces/PageModel.inteface";
import { AuthComponent } from "./components/AuthComponent";
import { PurchaseComponent } from "./components/PurchaseComponent";
import { WalletComponent } from "./components/WalletComponent";
import { waitForPageEvent } from "../helpers/handler";
import { Blockchain } from "../types";

export class FarawayPage extends BasePage implements PageModel {
  private readonly walletComponent: WalletComponent;

  constructor(page: Page) {
    super(page);
    this.walletComponent = new WalletComponent(page);
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

  private async authenticate(page: Page): Promise<void> {
    const authComponent = new AuthComponent(page);
    await authComponent.verifyRequiredElementsPresent();
    await authComponent.login();
  }

  async changeBlockchain(blockchain: Blockchain, token: string): Promise<void> {
    await this.selectors.settings.blockchain.selectOption(blockchain);
    await this.selectors.settings.token.fill(token);
  }

  async fillImageUrl(imageUrl: string): Promise<void> {
    await this.selectors.purchase.imageUrlField.fill(imageUrl);
  }

  async submitPurchase(): Promise<void> {
    await this.selectors.purchase.submitButton.click({ delay: 1000 });
  }

  async getPurchaseFrame(): Promise<PurchaseComponent> {
    const purchaseFrame = new PurchaseComponent(
      this.page.frameLocator("iframe")
    );
    await purchaseFrame.verifyRequiredElementsPresent();
    return purchaseFrame;
  }

  async getMintImageUrl(): Promise<string> {
    const image = this.selectors.minting.mintImage;

    await image.scrollIntoViewIfNeeded();
    await image.waitFor({ state: "visible" });

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for image to load

    const imageUrl = await image.getAttribute("src");
    if (!imageUrl) throw new Error("Image URL is null");
    return imageUrl;
  }

  async connectWalletAndConfirm(): Promise<void> {
    await this.walletComponent.connectWalletAndConfirm();
  }

  async handleNetworkSwitch(): Promise<void> {
    await this.walletComponent.handleNetworkSwitch();
  }

  async confirmTransaction(): Promise<void> {
    await this.walletComponent.confirmTransaction();
  }

  get wallet(): WalletComponent {
    return this.walletComponent;
  }
}
