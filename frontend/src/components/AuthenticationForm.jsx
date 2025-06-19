import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const AuthenticationForm = () => {
  const [signIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const toggleMode = () => {
    setFormData({ email: "", password: "", confirmPassword: "" });
    setSignIn(!signIn);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!signIn && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Submitted:", formData);
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-card p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        {signIn ? "Sign in" : "Sign up"}
      </h2>
      <form className="space-y-6" autoComplete="off">
        <div className="flex flex-col gap-2 justify-center">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email"></Input>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password"></Input>
        </div>
        {!signIn && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          {signIn ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={toggleMode}
                className="text-primary hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleMode}
                className="text-primary hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </div>
        <Button
          type="submit"
          className="w-full hover:cursor-pointer"
          onClick={handleSubmit}
        >
          {signIn ? "Sign in" : "Sign up"}
        </Button>
      </form>
    </div>
  );
};

export default AuthenticationForm;
