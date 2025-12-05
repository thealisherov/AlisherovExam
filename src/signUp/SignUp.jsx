import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "./signUpSchema";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  const handleSignup = (values) => {
    localStorage.setItem("user", JSON.stringify({ ...values, role: "user" }));
    localStorage.setItem("auth", JSON.stringify({ ...values, role: "user" }));
    alert("You are registered successfully!");
    navigate("/");
  };

  return (
    <div
      className={`
        min-h-[80vh] flex items-center justify-center p-4
        ${isDark ? "bg-gray-900" : "bg-gray-100"}
      `}
    >
      <div
        className={`
          rounded-2xl shadow-2xl p-8 max-w-md w-full border
          ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}
        `}
      >
        <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-6`}>Create a new account</p>

        <Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={signupSchema} onSubmit={handleSignup}>
          <Form className="flex flex-col gap-4">
            <div>
              <Field
                name="name"
                placeholder="Full name"
                className={`
                  w-full p-3 rounded-lg border-2 focus:outline-none transition
                  ${isDark 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300 focus:border-blue-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }
                `}
              />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email address"
                className={`
                  w-full p-3 rounded-lg border-2 focus:outline-none transition
                  ${isDark 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300 focus:border-blue-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }
                `}
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password (min 6 characters)"
                className={`
                  w-full p-3 rounded-lg border-2 focus:outline-none transition
                  ${isDark 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300 focus:border-blue-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }
                `}
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className={`
                cursor-pointer w-full py-3 rounded-lg font-semibold shadow-md transition
                ${isDark ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"} text-white
              `}
            >
              Create Account
            </button>
          </Form>
        </Formik>

        <p className={`text-center mt-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-500 font-semibold hover:underline ml-1"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
