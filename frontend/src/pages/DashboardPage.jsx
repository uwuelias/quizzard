import { useState } from "react";

const flashcardDecks = [
  { id: 1, title: "Math Basics", cardsCount: 20 },
  { id: 2, title: "History 101", cardsCount: 15 },
  { id: 3, title: "Science Facts", cardsCount: 30 },
];

const DashboardPage = () => {
  const [decks, setDecks] = useState(flashcardDecks);

  return (
    <main className="">
      <h1 className="text-3xl font-bold mb-6 ">Welcome back to Quizzard</h1>
    </main>
  );
};

export default DashboardPage;
