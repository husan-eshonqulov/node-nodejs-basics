import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(".", "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await fs.rm(filePath, { recursive: true })
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await remove();