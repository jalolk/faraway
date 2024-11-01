import fs from "fs";
var AdmZip = require("adm-zip");

export async function extractZip(zipPath: string, outputDir: string) {
  try {
    await fs.promises.mkdir(outputDir, { recursive: true });

    const files = await fs.promises.readdir(outputDir);

    if (files.length > 1) {
      return;
    }

    if (!fs.existsSync(zipPath)) {
      throw new Error(`ZIP file not found at path: ${zipPath}`);
    }

    const zip = new AdmZip(zipPath);

    console.log(`Extracting ZIP file to: ${outputDir}`);
    zip.extractAllTo(outputDir, true);
  } catch (error: any) {
    throw new Error(`Failed to extract ZIP file: ${error.message}`);
  }
}
