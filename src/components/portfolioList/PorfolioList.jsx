import "./portfolioList.scss";

export default function PorfolioList({ title, active, setSelected, id }) {
  return (
    <li className={active ? "portFolioList active" : "portFolioList"} 
    onClick={()=>setSelected(id)}>
      {title}
    </li>
  );
}
