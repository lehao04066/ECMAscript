import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Không được để trống!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast.error("Sai email hoặc mật khẩu!");
      return;
    }

    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("token", token);

    toast.success("Đăng nhập thành công!");
    navigate("/"); // hoặc /admin
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>

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
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
