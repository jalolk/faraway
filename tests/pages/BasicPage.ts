import { Page } from "@playwright/test";

export class BasePage {
  url: string;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.url = "/demo/";
  }
}
