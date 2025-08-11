
'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import MainContent from '@/app/components/MainContent';

export type Topic = 'HTML' | 'CSS' | 'JavaScript' | 'Java';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsSidebarOpen(true);
  };

  return (
    <div>
      <Header onTopicSelect={handleTopicSelect} />
      <div className="flex">
        {isSidebarOpen && selectedTopic && <Sidebar selectedTopic={selectedTopic} />}
        {selectedTopic ? (
          <MainContent />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Your Documentation</h1>
              <p className="text-xl text-gray-600">Select a topic from the navigation to get started.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
