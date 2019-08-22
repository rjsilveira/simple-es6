export function somaexterna(a, b) {
  return a + b;
}

/**
 * Asyn / await
 */
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK"), 2000);
  });

minhaPromise()
  .then(response => console.log(response))
  .catch(error => console.error(error));

async function execut() {
  const response = await minhaPromise();
  console.log(response);
}

execut();
