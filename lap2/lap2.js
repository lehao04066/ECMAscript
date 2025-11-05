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
const emailTemplate = `cam on ${user.firstName} ${user.lastName} da mua ${user.product} voi gia cuc toi chi ${user.price} vao ngay ${user.orderDate}}`; // Viết template ở đây

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
const productCard = `dien thoai ${product.name} co gia ban dau la ${product.price} gia sau giam gia la ${finalPrice}`; // Viết template ở đây

console.log(productCard);