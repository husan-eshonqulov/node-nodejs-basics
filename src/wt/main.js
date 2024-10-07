import { Worker } from "node:worker_threads";
import path from "node:path";
import os from "node:os";

const workerPath = path.resolve(".", "worker.js");

const performCalculations = async () => {
    const threads = os.cpus();
    const workers = threads.map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: i + 10 });
            worker.on("message", (data) => resolve({ status: "resolved", data }));
            worker.on("error", (_) => resolve({ status: "error", data: null }));
        });
    });
    Promise.all(workers).then(console.log);
};

await performCalculations();