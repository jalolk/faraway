import { expect, FrameLocator, Locator } from "@playwright/test";
import { PageModel } from "../../../interfaces/PageModel.inteface";

export class PurchaseComponent implements Partial<PageModel> {
  constructor(private readonly frame: FrameLocator) {}

  readonly selectors = {
    buyItemView: {
      title: this.frame.getByRole("heading", { name: "Buy Item" }),
      connectWalletButton: this.frame.getByRole("link", {
        name: "Pay with Connect a wallet to continue",
      }),
      buyButton: this.frame.getByRole("button", { name: "Buy" }),
      approveTokenButton: this.frame.getByRole("button", {
        name: "Approve",
      }),
    },
    selectPaymentMethodView: {
      payWithMetaMask: this.frame.getByText(/MetaMask/i),
      paymentMethods: this.frame.locator("#payment-methods"),
    },
    transactionStatus: {
      confirmationMessage: this.frame.getByText(/View transaction in/i),
      transactionHash: this.frame.locator("#transaction-hash"),
      errorMessage: this.frame.locator("#error-message"),
    },
  } as const;

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.buyItemView.title).toBeVisible();
  }

  async connectWallet(): Promise<void> {
    await this.selectors.buyItemView.connectWalletButton.click();
    await this.selectors.selectPaymentMethodView.payWithMetaMask.click();
  }

  async buyItem(): Promise<void> {
    await this.selectors.buyItemView.buyButton.isEnabled();
    await this.selectors.buyItemView.buyButton.click();
  }

  async approveToken(): Promise<void> {
    const approveButton = this.selectors.buyItemView.approveTokenButton;
    if (await approveButton.isVisible()) {
      await approveButton.click();
    }
  }

  getByText(text: string | RegExp): Locator {
    return this.frame.getByText(text);
  }
}
