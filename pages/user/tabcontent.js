import React from "react";
const TabContent = ({ id, activeTab, children }) => {
    return (
    activeTab ===id? <div className={activeTab === id ? "active" : ""}>
        { children }
    </div>
    : null
    );
};
export default TabContent;