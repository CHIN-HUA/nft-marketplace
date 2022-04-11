import React from "react";
const TabNav = ({ id, title, activeTab, setActiveTab }) => {
 
 const TabClick = () => {
   setActiveTab(id);
 };

return (
   <li onClick={TabClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNav;