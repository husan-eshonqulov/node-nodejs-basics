import path from "node:path";
import fsSync from "node:fs";
import fs from "node:fs/promises";

const oldPath = path.join(".", "files", "wrongFilename.txt");
const newPath = path.join(".", "files", "properFilename.md");

const rename = async () => {
    try {
        if (fsSync.existsSync(newPath)) {
            throw new Error(`${newPath} already exist`);
        }
        await fs.rename(oldPath, newPath);
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await rename();