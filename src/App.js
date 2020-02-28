import React from "react";
import "./styles.scss";
import { purchasingDataset, purchasingFields, bestSellingDataset, topCompetitorDataset } from "./datasets";
import { TopNav, SideNav, Main, Insights } from "./components";

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Main>
        <SideNav />
        <Insights purchasingDataset={purchasingDataset} purchasingFields={purchasingFields} bestSellingDataset={bestSellingDataset} topCompetitorDataset={topCompetitorDataset} />
      </Main>
    </div>
  );
}
