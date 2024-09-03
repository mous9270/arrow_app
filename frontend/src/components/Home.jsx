import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ArrowSwitcher = () => {
  const [isLeftArrow, setIsLeftArrow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLeftArrow(prev => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLeftArrow ? (
        <ArrowLeft size={48} color="blue" />
      ) : (
        <ArrowRight size={48} color="blue" />
      )}
    </div>
  );
};

export default ArrowSwitcher;
