import { useEffect, useState } from "react";

function Counter({ end, label, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // 1.2 detik
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

  return (
    <div
      className={`p-4 rounded-xl text-center border bg-${color}-500/10 border-${color}-500/20`}
    >
      <h3 className="text-2xl font-bold">
        {count}+
      </h3>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

export default Counter;