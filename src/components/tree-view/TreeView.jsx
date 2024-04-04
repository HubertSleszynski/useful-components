import React from "react";
import MenuList from "./MenuList";
import "./tree-view.css";

const TreeView = ({ menus = [] }) => {
  return (
    <>
      <h1>Tree View</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
};

export default TreeView;
