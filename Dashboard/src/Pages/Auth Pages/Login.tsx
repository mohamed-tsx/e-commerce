import { ChangeEvent, FormEvent, useState } from "react";
import { useUser } from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";

type FormDataTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    password: "",
  });

  const { saveUserInfo } = useUser();

  const apiUrl = "/api/user/login";

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, email } = formData;
    if (!(email && password)) {
      console.log("Error: Invalid email or password");
      return;
    }
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (data.success === false) {
        console.log("Error: " + JSON.stringify(data));
        return;
      }

      const user = data.rest;

      if (user.role !== "admin") {
        console.log("You're not allowed to login since you're not admin");
        return;
      }

      saveUserInfo(user);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex justify-center items-center h-screen"
      onSubmit={handleSubmit}
    >
      <div className="bg-green-300 p-8 rounded w-1/3">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" rounded-md w-full p-2"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-black w-full p-2 flex justify-center items-center text-white rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
