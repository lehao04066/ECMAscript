function getFirstLast(array) {
  const [first] = array;
  const last = array[array.length - 1];
  return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
//
function swapElements(arr) {
  const [, second, , fourth] = arr;
  return arr.map((item) => {
    if (item === second) return fourth;
    if (item === fourth) return second;
    return item;
  });
}
console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]
//
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("2 seconds passed"));

function fetchMultipleData(urls) {
  return Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))
  );
}
fetchMultipleData([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
]).then((users) => console.log(users));
fetchMultipleData(1);

const processOrder = async (orderId) => {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);

    return { order, user, products };
  } catch (error) {
    console.log("Loi", error);
  }
};
processOrder(1)

async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { data: result, error: null };
  } catch (error) {
   console.log("loi", error);
  }
}
console.log(safeApiCall(fetch, "https://jsonplaceholder.typicode.com/users/1"));