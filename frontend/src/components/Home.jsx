import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ArrowDisplayApp = () => {
  const [interval, setInterval] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isLeftArrow, setIsLeftArrow] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setIsLeftArrow(Math.random() < 0.5);
      }, parseFloat(interval) * 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, interval]);

  const handleStart = () => {
    if (interval && !isNaN(parseFloat(interval))) {
      setIsRunning(true);
    } else {
      alert('Please enter a valid time interval (e.g., 1s)');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isRunning ? (
        <div className="space-y-4">
          <Input
            type="text"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            placeholder="Enter time interval (e.g., 1s)"
            className="w-64"
          />
          <Button onClick={handleStart} className="w-full">
            Start
          </Button>
        </div>
      ) : (
        <div className="text-6xl">
          {isLeftArrow ? <ArrowLeft size={96} /> : <ArrowRight size={96} />}
        </div>
      )}
    </div>
  );
};

export default ArrowDisplayApp;
