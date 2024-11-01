import { Page } from "@playwright/test";

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
    if (type === "popup") {
      page.on("popup", async (popup) => {
        const handledPage = await handler(popup);
        resolve(handledPage);
      });
    } else {
      page.context().on("page", async (newPage) => {
        const handledPage = await handler(newPage);
        resolve(handledPage);
      });
    }
  });

  if (callback) {
    await callback();
  }

  return await pagePromise;
}
