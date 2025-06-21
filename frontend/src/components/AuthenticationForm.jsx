import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { loginRoute, registerRoute } from "../utils/APIRoutes.js";

const AuthenticationForm = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/dashboard");
    }
  }, []);

  const toggleMode = () => {
    setSignIn(!signIn);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // keep tracks of all the changes
  const handleOnChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (signIn) {
      if (!formData.email.trim() || !formData.password.trim()) {
        toast("Please fill all fields", {
          action: {
            label: "Clear",
          },
        });
        return false;
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !formData.email.trim() ||
        !formData.password.trim() ||
        !formData.confirmPassword.trim()
      ) {
        toast("Please fill all fields", {
          action: {
            label: "Clear",
          },
        });
        return false;
      } else if (!emailRegex.test(formData.email)) {
        toast("Invalid email address", {
          action: {
            label: "Clear",
          },
        });
        return false;
      } else if (formData.password.length < 8) {
        toast("Password should be equal or greater than 8 characters", {
          action: {
            label: "Clear",
          },
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast("Passwords do not match", {
          action: {
            label: "Clear",
          },
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const { email, password } = formData;
      if (signIn) {
        try {
          const { data } = await axios.post(loginRoute, {
            email,
            password,
          });
          if (data.success === false) {
            toast(data.message);
          }
          if (data.success === true) {
            localStorage.setItem(
              process.env.REACT_APP_LOCALHOST_KEY,
              JSON.stringify(data.user)
            );
            navigate("/dashboard");
          }
        } catch (e) {
          toast.error("Something went wrong!");
        }
      } else {
        try {
          const { data } = await axios.post(registerRoute, {
            email,
            password,
          });
          if (data.success === false) {
            toast(data.message, {
              action: {
                label: "Clear",
              },
            });
          }
          if (data.success === true) {
            localStorage.setItem(
              process.env.REACT_APP_LOCALHOST_KEY,
              JSON.stringify(data.user)
            );
            navigate("/dashboard");
          }
        } catch (e) {
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-card p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        {signIn ? "Sign in" : "Create account"}
      </h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-input bg-background text-foreground"
            onChange={handleOnChange}
            value={formData.email}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border border-input bg-background text-foreground"
            onChange={handleOnChange}
            value={formData.password}
          />
        </div>
        {!signIn && (
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full px-4 py-2 border border-input bg-background text-foreground"
              onChange={handleOnChange}
              value={formData.confirmPassword}
            />
          </div>
        )}
        <p className="text-center italic text-muted-foreground">
          <span className="">
            {signIn ? "Don't have an account?" : "Already have an account?"}
          </span>{" "}
          <button
            className="text-primary hover:underline"
            onClick={toggleMode}
            type="button" // make it so when an input is focused and user presses enter, it won't switch mode
          >
            {signIn ? "Sign up" : "Sign in"}
          </button>
        </p>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthenticationForm;
