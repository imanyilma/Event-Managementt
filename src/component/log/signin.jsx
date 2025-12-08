import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const handleGoSignup = () => {
    setAnimating(true);
    setTimeout(() => navigate("/signup"), 700);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload
    // optional: trigger animation before redirect
    setAnimating(true);
    setTimeout(() => navigate("/user"), 500); // redirect to user page
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-[900px] h-[520px] overflow-hidden rounded-2xl bg-black shadow-2xl">

        {/* Panels */}
        <div className="absolute inset-0 flex">

          {/* LEFT: Image */}
          <div
            className={`w-1/2 h-full bg-cover bg-center transition-transform duration-700 ease-in-out
              ${animating ? "translate-x-full" : "translate-x-0"}`}
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/07/2a/c3/072ac365f0205823bc7f8b36f48fcd11.jpg')",
            }}
          />

          {/* RIGHT: Login panel */}
          <div
            className={`w-1/2 bg-black text-white px-14 py-16 flex flex-col justify-center
              transition-transform duration-700 ease-in-out
              ${animating ? "-translate-x-full" : "translate-x-0"}`}
          >
            {/* Top-left arrow */}
            <div
              className={`absolute top-6 md:right sm:right z-20 transition-all duration-700
                ${animating ? "-translate-x-50" : "translate-x-0"}`}
            >
              <button
                type="button"
                onClick={handleGoSignup}
                className="flex items-center text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#6ee776] transition"
              >
                <span className="mr-1 text-lg">&larr;</span>
                SIGN UP
              </button>
              <p className="text-xs -px-7 text-gray-400 mb-6">
                if you don't have an account yet
              </p>
            </div>

            <h1 className="text-4xl font-light mb-2">Login</h1>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-[11px] tracking-[0.25em] text-gray-400 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-[#4ade80] outline-none text-sm pb-2"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.25em] text-gray-400 mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full bg-transparent border-b border-[#4ade80] outline-none text-sm pb-2"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#4ade80]" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="hover:text-[#4ade80]">
                  Forgot your password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center w-40 py-2 rounded-full bg-[#4ade80] text-black text-xs font-semibold tracking-[0.2em] hover:bg-[#22c55e] transition"
              >
                LOGIN
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
