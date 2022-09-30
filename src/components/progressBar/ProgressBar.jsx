import { useState, useEffect } from "react";
import "./progressBar.scss";

export default function ProgressBar({ width, percent }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div className="progressbar" style={{ width: width }}>
      <div style={{ width: `${value}px` }} className="progress"></div>
    </div>
  );
}
