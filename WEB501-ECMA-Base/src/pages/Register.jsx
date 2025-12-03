import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function RegisterPage() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();


```
// Gửi dữ liệu lên API hoặc xử lý đăng ký
console.log("Data đăng ký:", formData);
toast.success("Đăng ký thành công!");

// Reset form
setFormData({ name: "", email: "", password: "", confirmPassword: "" });
```

};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <Toaster /> <form
     className="bg-white p-8 rounded shadow-md w-full max-w-md"
     onSubmit={handleSubmit}
   > <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2> <div className="mb-4"> <label className="block mb-1">Tên</label> <input
         type="text"
         name="name"
         value={formData.name}
         onChange={handleChange}
         className="w-full border p-2 rounded"
         required
       /> </div> <div className="mb-4"> <label className="block mb-1">Email</label> <input
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         className="w-full border p-2 rounded"
         required
       /> </div> <div className="mb-4"> <label className="block mb-1">Mật khẩu</label> <input
         type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
         className="w-full border p-2 rounded"
         required
       /> </div> <button
       type="submit"
       className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
     >
Đăng Ký </button> </form> </div>
);
}

export default RegisterPage;
