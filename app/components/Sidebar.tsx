import { htmlTopics } from '@/app/data/html-topics';
import { cssTopics } from '@/app/data/css-topics';
import { jsTopics } from '@/app/data/js-topics';
import { javaTopics } from '@/app/data/java-topics';
import { Topic } from '@/app/page';

interface SidebarProps {
  selectedTopic: Topic;
}

export default function Sidebar({ selectedTopic }: SidebarProps) {
  const topics =
    selectedTopic === 'HTML'
      ? htmlTopics
      : selectedTopic === 'CSS'
      ? cssTopics
      : selectedTopic === 'JavaScript'
      ? jsTopics
      : javaTopics;

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">{selectedTopic} Tutorial</h2>
      <nav>
        <ul>
          {topics.map((topic) => (
            <li key={topic} className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                {topic}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}