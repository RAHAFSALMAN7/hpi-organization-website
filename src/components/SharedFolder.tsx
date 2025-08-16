import React, { useState } from 'react';
import { FolderOpen, File, Download, Eye, Lock, Search, Upload } from 'lucide-react';

type Category = 'hr' | 'policies' | 'training' | 'safety' | 'forms' | 'reports' | 'meetings';

interface BaseItem {
  id: number;
  name: string;
  lastModified: string;
  category: Category;
  access: 'public' | 'restricted';
}

interface FolderItem extends BaseItem {
  type: 'folder';
  itemCount: number;
}

interface FileItem extends BaseItem {
  type: 'file';
  fileType: 'pdf' | 'excel' | 'word' | 'other';
  size: string;
}

type Item = FolderItem | FileItem;

const folders: FolderItem[] = [
  { id: 1, name: "HR Documents", type: "folder", itemCount: 15, lastModified: "2025-01-15", category: "hr", access: "restricted" },
  { id: 2, name: "Company Policies", type: "folder", itemCount: 8, lastModified: "2025-01-12", category: "policies", access: "public" },
  { id: 3, name: "Training Materials", type: "folder", itemCount: 23, lastModified: "2025-01-10", category: "training", access: "public" },
];

const files: FileItem[] = [
  { id: 1, name: "Employee Handbook 2025.pdf", type: "file", fileType: "pdf", size: "2.4 MB", lastModified: "2025-01-15", category: "hr", access: "public" },
  { id: 2, name: "Safety Guidelines.pdf", type: "file", fileType: "pdf", size: "1.8 MB", lastModified: "2025-01-14", category: "safety", access: "public" },
  { id: 3, name: "IT Support Request Form.xlsx", type: "file", fileType: "excel", size: "0.5 MB", lastModified: "2025-01-12", category: "forms", access: "public" },
  { id: 4, name: "Quarterly Report Q1 2025.docx", type: "file", fileType: "word", size: "3.2 MB", lastModified: "2025-01-10", category: "reports", access: "restricted" },
  { id: 5, name: "Meeting Minutes - January.pdf", type: "file", fileType: "pdf", size: "0.9 MB", lastModified: "2025-01-08", category: "meetings", access: "public" },
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'hr', label: 'HR Documents' },
  { value: 'policies', label: 'Policies' },
  { value: 'training', label: 'Training' },
  { value: 'safety', label: 'Safety' },
  { value: 'forms', label: 'Forms' },
  { value: 'reports', label: 'Reports' },
  { value: 'meetings', label: 'Meetings' },
];

const getFileIcon = (fileType: string) => {
  const baseClasses = "w-8 h-8";
  switch (fileType) {
    case 'pdf': return <File className={`${baseClasses} text-[#FFBD59]`} />;
    case 'excel': return <File className={`${baseClasses} text-[#737373]`} />;
    case 'word': return <File className={`${baseClasses} text-[#737373]`} />;
    default: return <File className={`${baseClasses} text-[#737373]`} />;
  }
};

const SharedFolder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allItems: Item[] = [...folders, ...files];

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // حالة فتح القفل
  const handleLockClick = (item: Item) => {
    if (item.access === 'restricted') {
      alert(`🔒 Access Denied!\n"${item.name}" is restricted.`);
    } else {
      alert(`✅ "${item.name}" is accessible.`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-open">
      <h1 className="text-3xl font-bold mb-6 font-bar text-[#737373]">My Shared Folder</h1>

      {/* البحث والتصفية */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] w-5 h-5" />
          <input
            type="text"
            placeholder="Search files and folders..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBD59]"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFBD59]"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        <button className="bg-[#FFBD59] text-[#737373] px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-[#737373] hover:text-[#FFBD59] transition-colors">
          <Upload className="w-5 h-5" />
          <span>Upload</span>
        </button>
      </div>

      {/* عرض الملفات والمجلدات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.length === 0 ? (
          <p className="text-center text-[#737373] col-span-full">No items found</p>
        ) : (
          filteredItems.map(item => (
            <div
              key={item.id}
              className="border rounded-lg p-4 hover:shadow-md cursor-pointer transition bg-[#F4F1F1] border-[#737373]"
            >
              <div className="flex items-center space-x-4 mb-3">
                {item.type === 'folder' ? (
                  <FolderOpen className="w-8 h-8 text-[#FFBD59]" />
                ) : (
                  getFileIcon(item.fileType)
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate text-[#737373]">{item.name}</h3>
                  {item.type === 'folder' ? (
                    <p className="text-sm text-[#737373]">{item.itemCount} items</p>
                  ) : (
                    <p className="text-sm text-[#737373]">{item.size}</p>
                  )}
                </div>
                {item.access === 'restricted' && (
                  <button onClick={() => handleLockClick(item)}>
                    <Lock className="w-5 h-5 text-red-500" />
                  </button>
                )}
              </div>
              <div className="flex justify-between text-sm text-[#737373]">
                <span>Modified: {item.lastModified}</span>
                <span className="bg-[#737373] text-[#F4F1F1] px-2 py-1 rounded text-xs">{item.category}</span>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-[#737373] text-[#F4F1F1] py-2 rounded-lg hover:bg-[#FFBD59] hover:text-[#737373] flex items-center justify-center space-x-1 transition">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                {item.type === 'file' && (
                  <button className="bg-[#F4F1F1] text-[#737373] py-2 px-3 rounded-lg hover:bg-[#FFBD59] hover:text-[#737373] transition">
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SharedFolder;
