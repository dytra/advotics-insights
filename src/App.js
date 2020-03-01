import React,{useState} from "react";
import "./styles.scss";
import { purchasingDataset, purchasingFields, bestSellingDataset, topCompetitorDataset } from "./datasets";
import { TopNav, SideNav, Main, Insights } from "./components";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = (e) => {
    e.stopPropagation();
    setExpanded(!expanded)
  };
  return (
    <div className="App" onClick={toggleExpand}>
      <TopNav />
      <Main>
        <SideNav />
        <Insights purchasingDataset={purchasingDataset} purchasingFields={purchasingFields} bestSellingDataset={bestSellingDataset} topCompetitorDataset={topCompetitorDataset} expanded={expanded} setExpanded={setExpanded} toggleExpand={toggleExpand} />
      </Main>
    </div>
  );
}
