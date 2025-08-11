'use client';

import Link from 'next/link';
import { Topic } from '@/app/page';

interface HeaderProps {
  onTopicSelect: (topic: Topic) => void;
}

export default function Header({ onTopicSelect }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8">
        <button onClick={() => onTopicSelect('HTML')} className="text-gray-600 hover:text-gray-900">HTML</button>
        <button onClick={() => onTopicSelect('CSS')} className="text-gray-600 hover:text-gray-900">CSS</button>
        <button onClick={() => onTopicSelect('JavaScript')} className="text-gray-600 hover:text-gray-900">JavaScript</button>
        <button onClick={() => onTopicSelect('Java')} className="text-gray-600 hover:text-gray-900">Java</button>
      </nav>
      <div className="flex items-center">
        <Link href="/login" className="px-4 py-2 text-white bg-blue-500 rounded-md">
          Login
        </Link>
      </div>
    </header>
  );
}