import path from "node:path";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const gzip = createGzip();    
const srcPath = path.join(".", "files", "fileToCompress.txt");
const destPath = path.join(".", "files", "archive.gz");


const compress = async () => {
    const srcStream = createReadStream(srcPath);
    const destStream = createWriteStream(destPath);

    srcStream.pipe(gzip).pipe(destStream);
};

await compress();