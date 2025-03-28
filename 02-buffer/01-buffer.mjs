// const buffer = Buffer.alloc(5);
// buffer.fill("hi", 0, 2);
// buffer.fill(0x3a, 2, 3); //char code for :

// //buffer.fill("a", 5, 6);

// const anotherBuffer = Buffer.alloc(6);
// anotherBuffer.set(buffer, buffer.byteOffset, buffer.byteLength);

// console.log({ buffer });
// console.log(buffer.toString());
// anotherBuffer.fill("four", 5, 6);
// console.log(anotherBuffer.toString());

// const msg = "Hello there!";
// const preAllocated = Buffer.alloc(msg.length, msg);
// console.log(preAllocated, preAllocated.toString());

// const bufferFrom = Buffer.from(msg);
// console.log(bufferFrom, bufferFrom.toString());

//---------------
const str = "Hello World";
for (const index in str) {
  const code = str.charCodeAt(index);
  const byteCode = "0x" + Math.abs(code).toString(16);
  console.log({ code, byteCode });
}
