function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let classification = "";
  if (bmi < 18.5) {
    classification = "Thiếu cân";
  } else if (bmi < 24.9) {
    classification = "Bình thường";
  } else if (bmi < 29.9) {
    classification = "Thừa cân";
  } else {
    classification = "Béo phì";
  }
  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${classification}`;
}
console.log(calculateBMI(70, 1.75));
//
function createBook(title, author, year, price) {
  const idKey = `book_${year}`;
  return {
    title,
    author,
    year,
    price,
    [idKey]: true,
    getBookInfo() {
      return `${this.title} - ${this.author} (${this.year}), giá: ${this.price}đ`;
    },
    calculateDiscount(discount) {
      return this.price * (1 - discount / 100);
    },
  };
}
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
