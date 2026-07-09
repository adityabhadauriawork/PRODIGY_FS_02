import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/api";
import { motion } from "framer-motion";
import { ArrowLeft, Save } from "lucide-react";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createEmployee({
        ...form,
        salary: Number(form.salary),
      });

      navigate("/employees");
    } catch (err) {
      console.log(err);
      alert(
        err?.response?.data?.message ||
          "Unable to create employee."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <div className="min-h-screen bg-[#060B16] p-8">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >

        <div className="flex justify-between items-center mb-8">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-4xl font-bold text-white">
            Add Employee
          </h1>

        </div>

        <form
          onSubmit={submitHandler}
          className="rounded-[28px] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 shadow-[0_0_45px_rgba(59,130,246,.18)]"
        >

          <div className="grid lg:grid-cols-2 gap-6">

            <div>
              <label className="text-slate-300 mb-2 block">
                Employee ID
              </label>

              <input
                className={inputStyle}
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Full Name
              </label>

              <input
                className={inputStyle}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Email
              </label>

              <input
                className={inputStyle}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Phone
              </label>

              <input
                className={inputStyle}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Department
              </label>

              <input
                className={inputStyle}
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Position
              </label>

              <input
                className={inputStyle}
                name="position"
                value={form.position}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Salary
              </label>

              <input
                className={inputStyle}
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Joining Date
              </label>

              <input
                className={inputStyle}
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="mt-10 flex justify-end">

            <button
              disabled={loading}
              className="flex items-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all px-7 py-3 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,.45)] disabled:opacity-50"
            >
              <Save size={18} />

              {loading ? "Saving..." : "Create Employee"}

            </button>

          </div>

        </form>

      </motion.div>

    </div>
  );
}