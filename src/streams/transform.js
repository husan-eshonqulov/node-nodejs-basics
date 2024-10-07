import { Transform } from "node:stream";

const reverseString = (str) => {
    return str.split("").reverse().join("") + "\n";
};

const reverseTransform = new Transform({
    transform(chunk, _, callback) {
        callback(null, reverseString(chunk.toString()));
    }
});

const transform = async () => {
    (process.stdin).pipe(reverseTransform).pipe(process.stdout);
};

await transform();