import path from "node:path";
import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const gunzip = createGunzip();
const srcPath = path.join(".", "files", "archive.gz");
const destPath = path.join(".", "files", "fileToCompress.txt");

const decompress = async () => {
    const srcStream = createReadStream(srcPath);
    const destStream = createWriteStream(destPath);

    srcStream.pipe(gunzip).pipe(destStream);
};

await decompress();