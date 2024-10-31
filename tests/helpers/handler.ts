import { BrowserContext, Page } from "@playwright/test";

export async function waitForPageEvent(
  page: Page,
  type: "popup" | "page",
  callback?: CallableFunction
): Promise<Page> {
  const handler = async (newPage: Page) => {
    await newPage.waitForLoadState("networkidle");
    return newPage;
  };

  const pagePromise = new Promise<Page>((resolve) => {
    type === "popup"
      ? page.on("popup", (popup) => resolve(handler(popup)))
      : page.context().on("page", (newPage) => resolve(handler(newPage)));
  });

  if (callback) {
    await callback();
  }

  return await pagePromise;
}
