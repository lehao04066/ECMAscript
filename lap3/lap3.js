// Function 1
// function multiply(a, b) {
//   return a * b;
// }
const multiply1=(a,b) => {
  return a*b;
};
console.log(multiply1(4,5))

// Function 2
// function isPositive(number) {
//   return number >= 0;
// }
const isPositive=(number)=>{
    return number >=0;
}
// Function 3
// function getRandomNumber() {
//   return Math.random();
// }
const getRandomNumber=()=>{
    return Math.random();
}
// Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });
document.addEventListener("click",()=>console.log("click")
);
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin
});
console.log(createUser());

