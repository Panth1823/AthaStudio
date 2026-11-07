import React from "react";
import "./Placeholder.css";

export type AspectRatio = "4/3" | "16/9" | "1/1" | "4/5";

interface PlaceholderProps {
  ratio: AspectRatio;
  caption: string;
  credit?: string;
}

const RATIO_CSS: Record<AspectRatio, string> = {
  "4/3":  "4 / 3",
  "16/9": "16 / 9",
  "1/1":  "1 / 1",
  "4/5":  "4 / 5",
};

const Placeholder: React.FC<PlaceholderProps> = ({ ratio, caption, credit }) => {
  return (
    <div
      className="placeholder"
      role="img"
      aria-label={caption}
      style={{ aspectRatio: RATIO_CSS[ratio] }}
    >
      <span className="placeholder__caption">{caption}</span>
      {credit && <span className="placeholder__credit">{credit}</span>}
    </div>
  );
};

export default Placeholder;

