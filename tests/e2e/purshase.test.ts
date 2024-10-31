import { test } from "../../fixtures/metaMaskFixtures";
import { metaMaskWallet } from "../../test-data/metaMaskWallet";
import { FarawayPage } from "../pages/FarawayPage";
import { MetaMaskExtension } from "../pages/MetaMaskExtension";

test.describe("Purchase flow", () => {
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

  test("User can make a purchase", async ({ page }) => {
    await farawayPage.changeBlockchain("ETHEREUM", "USDC");

    const imageUrl = await farawayPage.selectors.minting.mintImage.getAttribute(
      "src"
    );

    if (imageUrl === null) {
      throw new Error("Image URL is null");
    }

    await farawayPage.purchaseImageWithUrl(imageUrl);
  });
});
