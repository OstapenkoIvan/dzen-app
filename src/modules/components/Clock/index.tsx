import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <Typography>{date.toLocaleTimeString("uk")}</Typography>;
}

export default Clock;
