import { useEffect, useState } from "react";

function Counter({ end, label, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;

    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  const colors = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    pink: "bg-pink-500/10 border-pink-500/20 text-pink-500",
  };

  return (
    <div
      className={`p-4 rounded-xl text-center border transition hover:scale-105 duration-300 ${colors[color]}`}
    >
      <h3 className="text-2xl font-bold">
        {count}+
      </h3>

      <p className="text-xs opacity-70">{label}</p>
    </div>
  );
}

export default Counter;