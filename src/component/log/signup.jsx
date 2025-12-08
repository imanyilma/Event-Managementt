// src/component/log/signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [animating, setAnimating] = useState(true);
  const navigate = useNavigate();

  // Navigate to Signin page when arrow is clicked
  const handleGoSignin = () => {
    setAnimating(false);
    setTimeout(() => navigate("/signin"), 700);
  };

  // Handle form submission (create account)
  const handleSignup = (e) => {
    e.preventDefault();        // prevent page reload
    setAnimating(false);       // optional animation
    // simulate account creation delay
    setTimeout(() => navigate("/user"), 700); // redirect to User page
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-[900px] h-[520px] overflow-hidden rounded-2xl bg-black shadow-2xl">

        {/* SLIDING PANELS */}
        <div className="absolute inset-0 flex">

          {/* LEFT — SIGNUP FORM (TOP LAYER) */}
          <div
            className={`w-1/2 bg-black text-white px-14 py-16 flex flex-col justify-center z-20
              transition-transform duration-700 ease-in-out
              ${animating ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Top arrow to go to Signin */}
            <div
              className={`absolute top-6 md z-30 transition-all duration-700
                ${animating ? "translate-x-0" : "translate-x-52"}`}
            >
              <button
                type="button"
                onClick={handleGoSignin}
                className="flex items-center text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#6ee776] transition"
              >
                <span className="mr-1 text-lg">&rarr;</span>
                SIGN IN
              </button>
              <p className="text-xs -px-7 text-gray-400 mb-6">
                if you already have an account
              </p>
            </div>

            <h1 className="text-4xl font-light mb-2">Create Account</h1>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSignup}>
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

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center w-40 py-2 rounded-full bg-[#4ade80] text-black text-xs font-semibold tracking-[0.2em] hover:bg-[#22c55e] transition"
              >
                CREATE
              </button>
            </form>
          </div>

          {/* RIGHT — IMAGE (BOTTOM LAYER) */}
          <div
            className={`w-1/2 h-full bg-cover bg-center z-10
              transition-transform duration-700 ease-in-out
              ${animating ? "translate-x-0" : "-translate-x-full"}`}
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/07/2a/c3/072ac365f0205823bc7f8b36f48fcd11.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
