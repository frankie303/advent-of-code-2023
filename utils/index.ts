import fs from "node:fs";
import path from "node:path";

export function load(dir: string) {
  console.log("load", path.join(dir, "./input.txt"));
  return fs.readFileSync(path.join(dir, "./input.txt"), "utf-8");
}
