import { statSync, createReadStream } from "node:fs";

const filename = "./text.txt";
const { size } = statSync(filename);
const stream = createReadStream(filename);

stream
  .once("readable", () => {
    console.log(`File data: ${stream.read(100)}`);
  })
  .on("readable", (_) => {
    let chunk;
    while ((chunk = stream.read()) !== null) {
      console.log(chunk.toString());
    }
  })
  .on("end", () => {
    console.log("End of file");
  });

// stream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
