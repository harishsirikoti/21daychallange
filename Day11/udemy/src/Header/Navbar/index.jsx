import React from "react";
import "./index.scss";

const index = () => {
  return (
    <div className="navbar">
      <div className="development">
        Development
        <div className="deve-menu">
          <div>Web Development</div>
          <div>Mobile Development</div>
          <div>Programming Languages</div>
          <div>Game Development</div>
          <div>Database Design & Development</div>
          <div>Software Testing</div>
        </div>
      </div>
      <div className="business">
        Business
        <div className="business-menu">
        <div>Enterpreeurship</div>
        <div>Communication</div>
        <div>Management</div>
        <div>Sales</div>
        <div>Business Strategy</div>
        </div>
        </div>
      <div className="finance">
        Finance & Accounting
        <div className="finance-menu">
          <div>Accounting & Bookkeeping</div>
          <div>Cryptocurrency & Blockchain</div>
          <div>Finance</div>
          <div>Financial Modeling & Analysis</div>
          <div>Investing & Trading</div>
        </div>
        </div>
      <div>IT & Software</div>
      <div>Office Productivity</div>
      <div>Personal Development</div>
      <div>Design</div>
      <div>Marketing</div>
      <div>Health & Fitness</div>
      <div>Music</div>
    </div>
  );
};

export default index;
