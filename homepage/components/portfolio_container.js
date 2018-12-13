import React from "react";
import PortfolioTitle from "./portfolio_title";
import Portfolio1 from "./portfolio1";
import Portfolio2 from "./portfolio2";
import portfolio3 from "./portfolio3";
import portfolio4 from "./portfolio4";

class PortfolioContainer extends React.Component {
  render() {
    return (
      <div id="portfolio" className="container">
        <PortfolioTitle />
        <Portfolio1 />
        <Portfolio2 />
        <portfolio3 />
        <portfolio4 />
      </div>
    );
  }
}

export default PortfolioContainer;
