import React from "react";
import "./styles.scss";
import { TopNav, SideNav, Main, Insights } from "./components";

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Main>
        <SideNav />
        <Insights />
      </Main>
    </div>
  );
}
