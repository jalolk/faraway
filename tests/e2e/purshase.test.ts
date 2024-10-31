import { expect } from "@playwright/test";
import { test } from "../../fixtures/metaMaskFixtures";
import { metaMaskWallet } from "../../test-data/metaMaskWallet";
import { FarawayPage } from "../pages/FarawayPage";
import { MetaMaskExtension } from "../pages/MetaMaskExtension";

test.describe("NFT Purchase Flow", () => {
  let farawayPage: FarawayPage;

  test.beforeEach(async ({ context }) => {
    farawayPage = new FarawayPage(context.pages()[0]);
    await farawayPage.navigateTo();
    await farawayPage.verifyRequiredElementsPresent();

    const metaMaskExtensionPage = await context.waitForEvent("page");
    const metaMaskExtension = new MetaMaskExtension(metaMaskExtensionPage);
    await metaMaskExtension.verifyRequiredElementsPresent();

    await farawayPage.loginInSameTab();
    await metaMaskExtension.importWallet(
      metaMaskWallet.passphrase,
      metaMaskWallet.password
    );
  });

  test("should complete NFT purchase with MetaMask wallet", async ({
    page,
  }) => {
    await test.step("prepare purchase", async () => {
      await farawayPage.changeBlockchain("ETHEREUM", "USDC");
      const imageUrl = await farawayPage.getMintImageUrl();
      await farawayPage.fillImageUrl(imageUrl);
      await farawayPage.submitPurchase();
    });

    await test.step("connect wallet", async () => {
      const purchaseFrame = await farawayPage.getPurchaseFrame();
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for frame stability
      await purchaseFrame.connectWallet();
      await farawayPage.wallet.connectWalletAndConfirm();
    });

    await test.step("complete purchase", async () => {
      const purchaseFrame = await farawayPage.getPurchaseFrame();
      await purchaseFrame.buyItem();
      await farawayPage.wallet.handleNetworkSwitch();
      await farawayPage.wallet.confirmTransaction();

      await expect(
        purchaseFrame.getByText(/View transaction in/i)
      ).toBeVisible();
    });
  });
});
