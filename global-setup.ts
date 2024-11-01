import path from "path";
import { extractZip } from "./utils";

async function globalSetup() {
  const crxPath = path.join(__dirname, "./test-data/metamask.zip");
  const outputDir = path.join(
    __dirname,
    "./test-data/extensions/metamask-chrome"
  );

  await extractZip(crxPath, outputDir);
}

export default globalSetup;
