import fs from "node:fs/promises";
import path from "node:path";

const srcPath = path.join(".", "files");
const destPath = path.join(".", "files_copy");


const copy = async () => {
    try {
        await fs.cp(srcPath, destPath, {
            dereference: true,
            errorOnExist: true,
            force: false,
            recursive: true
        });
    } catch (err) {
        throw new Error(`FS operation failed\n${err.message}`);
    }
};

await copy();
