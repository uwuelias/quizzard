import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AuthenticationForm = () => {
  const [signIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const toggleMode = () => {
    setSignIn(!signIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signIn) {
      // set up sign in logic
    } else {
      if (
        !formData.email.trim() ||
        !formData.password.trim() ||
        !formData.confirmedPassword.trim()
      ) {
        toast("Please fill all fields", {
          action: {
            label: "Clear",
          },
        });
        return;
      } else if (formData.password != formData.confirmedPassword) {
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
            />
          </div>
        )}
        <p className="text-center italic text-muted-foreground">
          <span className="">
            {signIn ? "Don't have an account?" : "Already have an account?"}
          </span>{" "}
          <button className="text-primary hover:underline" onClick={toggleMode}>
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
