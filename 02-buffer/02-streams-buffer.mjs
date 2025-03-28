//for in `seq 1 100`; do node -e "process.stdout.write('$i - hello world\n')" >> text.txt
import { readFile } from "fs/promises";

const data = (await readFile("text.txt")).toString();
const LINES_PER_ITERATION = 10;
const interations = Math.ceil(data.length / LINES_PER_ITERATION);
let page = 0;

for (let index = 1; index < interations; index++) {
  const start = index * LINES_PER_ITERATION;
  const end = start + LINES_PER_ITERATION;
  const chunk = data.slice(start, end);
  console.log({ page: ++page, chunk });
}
