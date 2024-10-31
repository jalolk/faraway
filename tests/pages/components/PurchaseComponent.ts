import { expect, FrameLocator, Page } from "@playwright/test";
import { PageModel } from "../../../interfaces/PageModel.inteface";

export class PurchaseComponent implements Partial<PageModel> {
  constructor(public frame: FrameLocator) {}

  readonly selectors = {
    buyItemView: {
      title: this.frame.getByRole("heading", { name: "Buy Item" }),
      connectWalletButton: this.frame.getByRole("link", {
        name: "Pay with Connect a wallet to continue",
      }),
      buyButton: this.frame.getByRole("button", { name: "Buy" }),
    },
    selectPaymentMethodView: {
      payWithMetaMask: this.frame.getByText(/MetaMask/i),
    },
  } as const;

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.buyItemView.title).toBeVisible();
  }

  async connectWallet(): Promise<void> {
    await this.selectors.buyItemView.connectWalletButton.click();
    await this.selectors.selectPaymentMethodView.payWithMetaMask.click();
  }
}
