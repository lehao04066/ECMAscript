// src/components/Button.jsx
const Button = ({ label }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 m-1 rounded">
      {label}
    </button>
  );
};

export default Button;