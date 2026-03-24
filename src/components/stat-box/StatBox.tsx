import type { JSX, ReactElement } from "react";
import "./StatBox.css";

interface StatItem {
  desc: string;
  stat: string;
}

interface StatBoxProps {
  items: StatItem[];
}

const StatBox = ({ items }: StatBoxProps): JSX.Element => {
  return (
    <div className="stat-box-container">
      {
        items.map((item, index): ReactElement => {
          return (
            <div 
              key={`key-${index}`} 
              className="stat-item"
            >
              <h2 className="stat-value">
                {item.stat}
              </h2>
              <p className="stat-desc">
                {item.desc}
              </p>
            </div> 
          )
        })
      }
    </div>
  )
}

export default StatBox;