import { Page } from "@playwright/test";
import { MetaMaskExtension } from "../MetaMaskExtension";

export class WalletComponent {
  constructor(private readonly page: Page) {}

  readonly selectors = {
    walletConnect: {
      connectButton: this.page.getByRole("button", { name: "Connect Wallet" }),
      confirmButton: this.page.getByRole("button", { name: "Confirm" }),
      networkSwitch: this.page.getByRole("button", { name: "Switch Network" }),
      transactionConfirm: this.page.getByRole("button", {
        name: "Confirm Transaction",
      }),
    },
    status: {
      connectionState: this.page.locator("#wallet-state"),
      networkState: this.page.locator("#network-state"),
    },
    balance: {
      amount: this.page.locator("#wallet-balance"),
      currency: this.page.locator("#currency-type"),
    },
  } as const;

  async connectWalletAndConfirm(): Promise<void> {
    const pagePromise = await this.page.context().waitForEvent("page");
    const newPage = pagePromise;

    const metaMask = new MetaMaskExtension(newPage);
    await metaMask.connectToSite();
  }

  async handleNetworkSwitch(): Promise<void> {
    const pagePromise = await this.page.context().waitForEvent("page");
    const newPage = pagePromise;

    const metaMask = new MetaMaskExtension(newPage);
    await metaMask.switchNetwork();
  }

  async confirmTransaction(): Promise<void> {
    const pagePromise = await this.page.context().waitForEvent("page");
    const newPage = pagePromise;

    const metaMask = new MetaMaskExtension(newPage);
    await metaMask.makeTransaction();
  }
}
