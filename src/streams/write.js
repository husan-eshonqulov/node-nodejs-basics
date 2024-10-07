import path from "node:path";
import fs from "node:fs";

const filePath = path.join(".", "files", "fileToWrite.txt");

const write = async () => {
    const writableStream = fs.createWriteStream(filePath);
    (process.stdin).pipe(writableStream);
};

await write();