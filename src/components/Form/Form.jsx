import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  return (
    <>
      <form className="py-5">
        <div className="container py-5">
          <div className="w-75 mx-auto justify-content-center">
            <div className={`field ${form.name ? "active" : ""}`}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-control rounded-0 border-0 border-bottom shadow-none pb-3"
                id="name"
                placeholder="userName"
              />

              <label htmlFor="name" className="form-label">
                userName:
              </label>
            </div>

            <div className={`field ${form.age ? "active" : ""}`}>
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="form-control rounded-0 border-0 border-bottom shadow-none pb-3"
                id="age"
                placeholder="userAge"
              />
              <label htmlFor="age" className="form-label">
                userAge:
              </label>
            </div>
            <div className={`field ${form.email ? "active" : ""}`}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="form-control rounded-0 border-0 border-bottom shadow-none pb-3"
                id="email"
                placeholder="userEmail"
              />
              <label htmlFor="email" className="form-label">
                userEmail:
              </label>
            </div>
            <div className={`field ${form.password ? "active" : ""}`}>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="form-control rounded-0 border-0 border-bottom shadow-none pb-3"
                id="password"
                placeholder="userPassword"
              />
              <label htmlFor="password" className="form-label">
                userPassword:
              </label>
            </div>
            <button className="btn text-white bg-second-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
