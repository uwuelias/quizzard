import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md rounded-lg bg-card p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign in</h2>
        <form className="space-y-6">
          <div className="flex flex-col gap-2 justify-center">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email"></Input>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password"></Input>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>{" "}
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
};

export default SignInPage;
