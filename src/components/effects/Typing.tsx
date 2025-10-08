import { useEffect, useState } from "react";
import "./Typing.scss";

interface TypingProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function Typing({ text, speed = 50, delay = 0, className = "" }: TypingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return <span className={className}>{displayed}</span>;
}
