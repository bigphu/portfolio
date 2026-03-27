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
  const isImage = (path: string) => /\.(png|jpe?g|svg|gif|webp)$/i.test(path);

  return (
    <div className="stat-box-container">
      {
        items.map((item, index): ReactElement => {
          return (
            <div 
              key={`key-${index}`} 
              className="stat-item"
            >

              {
                isImage(item.stat) ? (
                  <img className="stat-img" src={`${item.stat}`} alt={`${item.desc}`}/>
                ) : (
                  <h2 className="stat-value">
                    {item.stat}
                  </h2>
                )
              }
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