import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import TableDoctor from "./TableDoctor";
import './tabTable.css'

const Tabs = (items) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let item = items.items;
  // console.log("doctor items===", item)

  return (
    <div className="tabs__wrap">
      <Nav tabs className="pl-0">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => toggle("1")}
          >
            Basic Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => toggle("2")}
          >
            Appointments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => toggle("3")}
          >
            Shedules
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TableDoctor item={item} />
        </TabPane>
        <TabPane tabId="2">
          <p>
            Text willl Come here..
          </p>
        </TabPane>
        <TabPane tabId="3">
          <p>
            Text willl Come here..
          </p>
        </TabPane>

      </TabContent>
    </div>
  );
};

export default Tabs;
