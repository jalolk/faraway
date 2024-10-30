export interface PageModel {
  readonly selectors: object;
  navigateTo: () => Promise<void>;
  verifyRequiredElementsPresent: () => Promise<void>;
}
