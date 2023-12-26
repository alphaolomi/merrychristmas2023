'use client';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

function ConfettiComponent() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { width, height } = useWindowSize()

  const toggleConfetti = () => {
    setIsConfettiActive(!isConfettiActive);
  };

  return (
    <div>
      <Button className="mt-4 bg-white text-red-600 mx-auto"
        onClick={toggleConfetti}>👋 Wave hello</Button>
      {isConfettiActive && <Confetti
        width={width}
        height={height}
      />}
    </div>
  );
}

export default ConfettiComponent;
