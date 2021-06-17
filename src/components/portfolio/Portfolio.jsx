import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PorfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  desktopPortfolio,
  //contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
     {
       id: "featured",
       title: "Featured",
     },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desktop",
      title: "Desktop App",
    },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desktop":
        setData(desktopPortfolio);
        break;
        default:
          
      // case "content":
      //   setData(contentPortfolio);
      //   break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
            <div className="item">
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
        </div>

        ))
        }
       
      </div>
    </div>
  );
}
