import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const HomePage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Quizzard
        </h1>
        <p className="text-muted-foreground mb-7">
          Create flashcards, study smarter, and master your subject.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Button asChild>
            <Link to="/authentication">Sign in</Link>
          </Button>
          <Button asChild>
            <a href="https://github.com/uwuelias/quizzard" target="_blank">
              <Github /> Link to Repo
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
