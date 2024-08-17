import { useEffect, useState } from "react";

const Count = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const countDownInternal = setInterval(() => {
      const currentTime = new Date();
      setDate(currentTime);
    }, 1000);

    // cleanup function
    return () => clearInterval(countDownInternal);
  }, []);

  return (
    <div className="hidden md:flex gap-5">
      <div>
        <span className="font-mono text-4xl">{date.getHours().toString()}</span>
        hours
      </div>
      <div>
        <span className="font-mono text-4xl">
          {date.getMinutes().toString()}
        </span>
        min
      </div>
      <div>
        <span className="font-mono text-4xl">
          <span>{date.getSeconds().toString()}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Count;
