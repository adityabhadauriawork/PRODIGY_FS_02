import { User, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import AuthLayout from "../layouts/AuthLayout";
import Logo from "../components/ui/Logo";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      navigate("/dashboard");
    }, 1200);
  };

  return (
    <AuthLayout>
      <Logo />

      <motion.form
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
        onSubmit={login}
        className="space-y-6"
      >
        <Input
          icon={<User className="text-blue-400" />}
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <Input
          icon={<Lock className="text-blue-400" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2 cursor-pointer">

            <input
              type="checkbox"
              checked={remember}
              onChange={() =>
                setRemember(!remember)
              }
            />

            <span className="text-slate-400">
              Remember me
            </span>

          </label>

          <button
            type="button"
            className="text-blue-400 hover:text-cyan-300 transition"
          >
            Forgot Password?
          </button>

        </div>

        <Button>

          {loading ? (

            "Signing In..."

          ) : (

            <div className="flex justify-center items-center gap-2">

              Login

              <ArrowRight size={18} />

            </div>

          )}

        </Button>

      </motion.form>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.8 }}

        className="mt-10 text-center"

      >

        <p className="text-slate-500 text-sm">

          Employee Management System

        </p>

        <p className="text-slate-600 text-xs mt-2">

          Designed with React • Tailwind • Framer Motion

        </p>

      </motion.div>
    </AuthLayout>
  );
}