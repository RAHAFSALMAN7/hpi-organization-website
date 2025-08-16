import React from 'react';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

interface NewsSectionProps {
  preview?: boolean;
}

const SideSarah = () => {
  return (
    <img
      src="/sara-full.png" // ضع الصورة في public
      alt="Sarah"
      className="
        hidden lg:block
        fixed bottom-0 right-0
        h-screen
        object-contain
        z-50
        pointer-events-none
      "
    />
  );
};

const NewsSection: React.FC<NewsSectionProps> = ({ preview = false }) => {
  const newsItems = [
    {
      id: 1,
      title: "HPI Announces New Strategic Partnership",
      excerpt:
        "We're excited to announce our partnership with leading industry innovators to enhance our service delivery.",
      author: "John Davis",
      date: "2025-01-15",
      category: "Partnership",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Q1 Performance Results Exceed Expectations",
      excerpt:
        "Outstanding team performance leads to record-breaking results in the first quarter of 2025.",
      author: "Sarah Johnson",
      date: "2025-01-12",
      category: "Performance",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "New Employee Wellness Program Launched",
      excerpt:
        "Comprehensive wellness initiative focused on mental health, fitness, and work-life balance.",
      author: "Dr. Michael Chen",
      date: "2025-01-10",
      category: "Wellness",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Technology Infrastructure Upgrade Complete",
      excerpt:
        "State-of-the-art systems now in place to improve efficiency and security across all departments.",
      author: "Alex Rodriguez",
      date: "2025-01-08",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const displayItems = preview ? newsItems.slice(0, 2) : newsItems;
  const highlight = "#FFBD59";
  const textColor = "#737373";
  const bgLight = "#F4F1F1";

  if (preview) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative">
        <SideSarah />
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Newspaper className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold" style={{ color: textColor }}>
              Latest News
            </h2>
          </div>
          <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
            {newsItems.length} articles
          </span>
        </div>

        <div className="space-y-4">
          {displayItems.map((item) => (
            <article
              key={item.id}
              className="border-l-4"
              style={{ borderColor: highlight }}
            >
              <div
                className={`pl-4 hover:bg-[${bgLight}] p-3 rounded-r-lg transition-colors`}
              >
                <h3
                  className="font-semibold mb-1 line-clamp-2"
                  style={{ color: textColor }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm mb-2 line-clamp-2"
                  style={{ color: textColor }}
                >
                  {item.excerpt}
                </p>
                <div
                  className="flex items-center justify-between text-xs"
                  style={{ color: textColor }}
                >
                  <span>{item.date}</span>
                  <span className="bg-yellow-50 text-yellow-600 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="w-full mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center justify-center space-x-1 hover:bg-yellow-50 py-2 rounded-lg transition-colors">
          <span>View All News</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      <SideSarah />
      <div className="text-center mb-12 pr-48">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
          HPI News
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto"
          style={{ color: textColor }}
        >
          Stay informed with the latest updates, developments, and achievements
          from across our organization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pr-48">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <div
                  className="flex items-center space-x-1 text-sm"
                  style={{ color: textColor }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>

              <h2
                className="text-xl font-bold mb-3 cursor-pointer hover:text-yellow-600 transition-colors"
                style={{ color: textColor }}
              >
                {item.title}
              </h2>

              <p
                className="mb-4 line-clamp-3"
                style={{ color: textColor }}
              >
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" style={{ color: textColor }} />
                  <span className="text-sm" style={{ color: textColor }}>
                    {item.author}
                  </span>
                </div>
                <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 hover:bg-yellow-50 px-3 py-2 rounded-lg transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
