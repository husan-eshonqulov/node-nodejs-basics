import path from "node:path";
import fs from "fs";

const filePath = path.join(".", "files", "fileToRead.txt");

const read = async () => {
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout);
};

await read();