import { useState } from "react";
import toast from "react-hot-toast";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Không được để trống!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      toast.error("Email đã tồn tại!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Đăng ký thành công!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Register</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            className="border rounded px-3 py-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            className="border rounded px-3 py-2 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
