import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 60, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let timeoutId;
    setDisplayed("");
    setShowCursor(true);

    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeoutId = window.setTimeout(type, speed);
      }
    };

    type();
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);

    return () => {
      clearInterval(cursorInterval);
      window.clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span
        style={{ opacity: showCursor ? 1 : 0 }}
        className="typewriter-cursor"
      >
        _
      </span>
    </span>
  );
}
