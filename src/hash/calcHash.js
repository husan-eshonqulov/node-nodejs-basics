import { createReadStream } from "node:fs";
import { stdout, stdin } from "node:process";
import path from "node:path";
const { createHash } = await import("node:crypto");

const filePath = path.join(".", "files", "fileToCalculateHashFor.txt");

const hash = createHash("sha256");

const calculateHash = async () => {
    const input = createReadStream(filePath);
    input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();