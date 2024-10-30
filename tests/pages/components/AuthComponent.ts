import { expect, Page } from "@playwright/test";
import { validUser } from "../../../test-data/userData";
import { PageModel } from "../../../interfaces/PageModel.inteface";

export class AuthComponent implements Partial<PageModel> {
  constructor(public page: Page) {}

  readonly selectors = {
    emailForm: {
      emailInput: this.page.getByTestId("email-form-email-input"),
      submitButton: this.page.getByTestId("email-form-submit-button"),
    },
    verifyEmailForm: {
      codeInputContainer: this.page.getByTestId("verify-email-form-code-input"),
    },
    successTitle: this.page.getByTestId("success-title"),
  } as const;

  async login(): Promise<void> {
    await this.selectors.emailForm.emailInput.fill(validUser.email);
    await this.selectors.emailForm.submitButton.click();

    const codeInputContainer =
      this.selectors.verifyEmailForm.codeInputContainer;

    for (let i = 0; i < validUser.code.length; i++) {
      await codeInputContainer.locator("input").nth(i).fill(validUser.code[i]);
    }

    await expect(this.selectors.successTitle).toBeVisible();
  }

  async verifyRequiredElementsPresent(): Promise<void> {
    await expect(this.selectors.emailForm.emailInput).toBeVisible();
  }
}
