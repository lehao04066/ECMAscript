const calculateBMI = (weight, height) => {
    const BMI = weight / (height * height);

    let status = "";

    if (BMI < 18.5) {
        status = "Thiếu cân";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        status = "Bình thường";
    } else if (BMI >= 25 && BMI < 29.9) {
        status = "Thừa cân";
    } else {
        status = "Béo phì";
    }

    return `BMI của bạn là ${BMI.toFixed(2)} → ${status}`;
};

console.log(calculateBMI(70, 1.7));

const createBook = () => {

}