import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ArrowSwitcher = () => {
  const [isLeftArrow, setIsLeftArrow] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSwitching(true);
      setTimeout(() => {
        setIsLeftArrow(prev => !prev);
        setIsSwitching(false);
      }, 1500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isSwitching ? null : isLeftArrow ? (
        <ArrowLeft size={48} color="blue" />
      ) : (
        <ArrowRight size={48} color="blue" />
      )}
    </div>
  );
};

export default ArrowSwitcher;

