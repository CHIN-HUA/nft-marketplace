import React from "react";
const TabNav = ({ id, title, activeTab, prestate, setState, setActiveTab }) => {
 
 const TabClick = (prestate) => { 
  if(prestate == 1)
  {
    setActiveTab(id);
    setState(0);
  }
 };

return (
   <li onClick={()=>{TabClick(prestate)}} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNav;