import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(".", "files", "fileToRead.txt");

const read = async () => {
    try {
        const content = await fs.readFile(filePath, "utf-8");
        console.log(content);
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await read();