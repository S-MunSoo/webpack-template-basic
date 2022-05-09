import "../scss/main.scss";

async function test() {
  const promise = Promise.resolve(441);
  console.log(await promise);
}
test();
