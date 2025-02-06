import React, { useState } from "react";
import Confetti from "react-confetti";
import MainLayout from "./layouts/MainLayout";

const Surprise = () => {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <MainLayout title="Surprise | MyPage">
      {showConfetti && <Confetti />}
      <h1 className="text-3xl font-bold mb-4">Click Counter 🎯</h1>
      <p className="text-xl mb-4">You clicked {count} times!</p>
      <button onClick={handleClick} className="btn btn-primary px-6 py-3 text-lg">
        Click Me! 🚀
      </button>
    </MainLayout>
  );
};

export default Surprise;