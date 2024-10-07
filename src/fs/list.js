import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(".", "files");

const list = async () => {
    try {
        const files = await fs.readdir(filePath, { recursive: true });
        console.log(files);
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await list();