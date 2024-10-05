import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(".", "files", "fresh.txt");

const create = async () => {
    try {
        await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await create();