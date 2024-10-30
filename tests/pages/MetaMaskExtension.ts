import { expect, Page } from "@playwright/test";
import { PageModel } from "../../interfaces/PageModel.inteface";
import { BasePage } from "./BasicPage";

export class MetaMaskExtension extends BasePage implements PageModel {
  constructor(page: Page) {
    super(page);
    this.url = "chrome-extension://pbekjjmobkokknennmdoehikmnabdnjn/home.html";
  }

  readonly selectors = {
    onboardingView: {
      agreeCheckbox: this.page.getByTestId("onboarding-terms-checkbox"),
      importWalletButton: this.page.getByRole("button", {
        name: "Import an existing wallet",
      }),
    },
  } as const;

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.onboardingView.agreeCheckbox).toBeVisible();
    await expect(
      this.selectors.onboardingView.importWalletButton
    ).toBeVisible();
  }
}
