"use client"

import React, { useState } from 'react'

interface Tab {
  label: string;
  onClick: () => void;
  active: boolean;
}

const Tab = ({ label, onClick, active }: Tab) => {
  return (
    <button className="px-1 rounded-md bg-primary-accent text-secondary dark:bg-secondary-accent dark:text-primary" onClick={onClick}>
      {label}
    </button>
  )
}

interface TabContent {
  content: React.ReactNode;
}

const TabContent = ({ content }: TabContent) => {
  return <div>{content}</div>;
}

interface Tabs {
  tabs: { label: string; content: React.ReactNode; }[];
}

export const Tabs = ({ tabs }: Tabs) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  }

  return (
    <>
      <div className="mx-2 flex gap-3">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            active={index === activeTab}
          />
        ))}
      </div>
      <div className="mx-6">
        <TabContent content={tabs[activeTab].content} />
      </div>
    </>
  )
}
