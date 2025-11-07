for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Hiện tại in ra 3,3,3
    }, 100);
}

// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
    name: "ThuyTien",
    age: 20,

};
student.grape = "A"
student.age = 21
console.log(student)

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student
// Tạo template cho email thông báo

const user = {
    firstName: "Nguyen",
    lastName: "Van A",
    product: "Laptop Dell XPS",
    price: 25000000,
    orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
xin chao ${user.firstName} ${user.lastName} 
cam on ban  ${user.lastName} 
da mua ${user.product} 
voi gia cuc toi chi ${user.price} 
vao ngay ${user.orderDate}}`; // Viết template ở đây

console.log(emailTemplate);

// Tạo HTML template cho card sản phẩm
const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `dien thoai ${product.name} 
co gia ban dau la ${product.price}
 gia sau giam gia la ${finalPrice}`; // Viết template ở đây

console.log(productCard);
// Viết lại object sau sử dụng ES6 enhanced object literals

// const rectangle = {
//   width: width,
//   height: height,
//   color: color,
//   calculateArea: function () {
//     return this.width * this.height;
//   },
//   describe: function () {
//     return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//   },
// };
const width = 100;
const height = 200;
const color = "red";
const rectangleES6 = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  }
};
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,
  ...features.reduce((acc, feature) => {
    acc[`feature_${feature}`] = true;
    return acc;
  }, {}),
  getProductionConfig() {
    return {
      api: this[`api_${env}_${version}`],
      features: features.filter(feature => this[`feature_${feature}`]),
    };
  }
};