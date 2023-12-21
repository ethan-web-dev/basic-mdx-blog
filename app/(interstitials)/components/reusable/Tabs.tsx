"use client"

import React, { useState } from 'react'

interface Tab {
  label: string;
  onClick: () => void;
  active: boolean;
}

const Tab = ({ label, onClick, active }: Tab) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

interface TabContent {
  content: string;
}

const TabContent = ({ content }: TabContent) => {
  return <div>{content}</div>;
}

interface Tabs {
  tabs: { label: string; content: string }[];
}

export const Tabs = ({ tabs }: Tabs) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  }

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            active={index === activeTab}
          />
        ))}
      </div>
      <div className="">
        <TabContent content={tabs[activeTab].content} />
      </div>
    </div>
  )
}
