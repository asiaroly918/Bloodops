import { useState } from "react";

const Login = () => {
const [email, setEmail] = useState("");

const handleLogin = (e) => {
    e.preventDefault();

    const user = {
    email,
    name: email.split("@")[0],
    role: email === "admin@gmail.com" ? "admin" : "donor",
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/";
};

return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-md rounded">

    <h2 className="text-2xl font-bold mb-6 text-center">
        Login
    </h2>

    <form onSubmit={handleLogin} className="space-y-4">

        <input
            type="email"
        placeholder="Enter email"
        className="w-full border p-3 rounded"
        onChange={(e) => setEmail(e.target.value)}
        required
        />

        <button className="w-full bg-red-600 text-white py-3 rounded">
        Login
        </button>

    </form>

    </div>
   );
};

export default Login;