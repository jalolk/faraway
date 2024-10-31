import { Page } from "@playwright/test";

type CallbackFunction = () => Promise<void>;

export async function waitForPageEvent(
  page: Page,
  type: "popup" | "page",
  callback?: CallbackFunction
): Promise<Page> {
  const handler = async (newPage: Page) => {
    await newPage.waitForLoadState();
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
