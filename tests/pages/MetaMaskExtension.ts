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
    helpUsImproveView: {
      noThanksButton: this.page.getByRole("button", { name: "No thanks" }),
    },
    secretRecoveryView: {
      wordInput: (index: number) => {
        return this.page.getByTestId(`import-srp__srp-word-${index}`);
      },
      confirmButton: this.page.getByRole("button", {
        name: "Confirm Secret Recovery Phrase",
      }),
    },
    createPasswordView: {
      passwordInput: this.page.getByTestId("create-password-new"),
      confirmPasswordInput: this.page.getByTestId("create-password-confirm"),
      acceptTermsCheckbox: this.page.getByTestId("create-password-terms"),
      importMyWalletButton: this.page.getByRole("button", {
        name: "Import my wallet",
      }),
    },
    walletCreationSuccessfulView: {
      gotItButton: this.page.getByRole("button", {
        name: "Got it",
      }),
    },
    installCompleteView: {
      nextButton: this.page.getByRole("button", {
        name: "Next",
      }),
      doneButton: this.page.getByRole("button", {
        name: "Done",
      }),
    },
  } as const;

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.onboardingView.agreeCheckbox).toBeVisible();
  }

  async typePassphrase(passphrase: string[]): Promise<void> {
    for (let i = 0; i < passphrase.length; i++) {
      await this.selectors.secretRecoveryView.wordInput(i).fill(passphrase[i]);
    }
  }

  async importWallet(passphrase: string[], password: string): Promise<void> {
    await this.selectors.onboardingView.agreeCheckbox.click();
    await this.selectors.onboardingView.importWalletButton.click();

    await this.selectors.helpUsImproveView.noThanksButton.click();

    await this.typePassphrase(passphrase);
    await this.selectors.secretRecoveryView.confirmButton.click();

    await this.selectors.createPasswordView.passwordInput.fill(password);
    await this.selectors.createPasswordView.confirmPasswordInput.fill(password);
    await this.selectors.createPasswordView.acceptTermsCheckbox.click();
    await this.selectors.createPasswordView.importMyWalletButton.click();

    await this.selectors.walletCreationSuccessfulView.gotItButton.click();
    await this.selectors.installCompleteView.nextButton.click();
    await this.selectors.installCompleteView.doneButton.click();
  }
}
