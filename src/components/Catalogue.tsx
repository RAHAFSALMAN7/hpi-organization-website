import React, { useState } from 'react';
import { Book, Search, Filter, Star, ArrowRight, Tag, Grid, List } from 'lucide-react';

const Catalogue: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: "Professional Development Program",
      description: "Comprehensive training program designed to enhance leadership skills and career growth.",
      category: "training",
      price: "RM 2,500",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Self-paced learning", "Expert mentorship", "Certificate included"]
    },
    {
      id: 2,
      name: "Business Consultation Services",
      description: "Strategic business consulting to optimize operations and drive growth.",
      category: "consulting",
      price: "RM 5,000",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Market analysis", "Strategic planning", "Implementation support"]
    },
    {
      id: 3,
      name: "Digital Marketing Package",
      description: "Complete digital marketing solution including SEO, social media, and content marketing.",
      category: "marketing",
      price: "RM 3,200",
      rating: 4.7,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["SEO optimization", "Social media management", "Content creation"]
    },
    {
      id: 4,
      name: "IT Infrastructure Solutions",
      description: "End-to-end IT infrastructure setup and maintenance services for businesses.",
      category: "technology",
      price: "RM 8,500",
      rating: 4.6,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["24/7 support", "Cloud integration", "Security assessment"]
    },
    {
      id: 5,
      name: "Financial Advisory Services",
      description: "Expert financial planning and investment advisory services for sustainable growth.",
      category: "finance",
      price: "RM 4,200",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Investment planning", "Risk assessment", "Tax optimization"]
    },
    {
      id: 6,
      name: "Quality Assurance Program",
      description: "Comprehensive quality management system implementation and certification support.",
      category: "quality",
      price: "RM 6,800",
      rating: 4.5,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["ISO certification", "Process optimization", "Audit support"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'training', label: 'Training' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'quality', label: 'Quality' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-[#FFBD59] fill-current' : 'text-[#737373]'}`}
          />
        ))}
        <span className="text-sm text-[#737373] ml-1 font-open-sans">({rating})</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-[#F4F1F1]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#737373] mb-4 font-barlow">Services Catalogue</h1>
        <p className="text-xl text-[#737373] max-w-3xl mx-auto font-open-sans">
          Explore our comprehensive range of professional services designed to help your business thrive and grow.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-[#FFBD59] font-open-sans"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-[#737373]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-[#737373] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-[#FFBD59] font-open-sans"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2 bg-[#EAEAEA] rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-[#FFBD59] shadow-sm text-[#737373]' : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-[#FFBD59] shadow-sm text-[#737373]' : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[#737373] font-open-sans">
          Showing {filteredProducts.length} of {products.length} services
        </p>
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <Book className="w-16 h-16 text-[#737373] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-[#737373] mb-2 font-barlow">No services found</h3>
          <p className="text-[#737373] font-open-sans">Try adjusting your search or filter criteria</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#F4F1F1] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-[#FFBD59]" />
                    <span className="text-sm text-[#737373] bg-[#FFBD59] px-2 py-1 rounded capitalize font-open-sans">
                      {product.category}
                    </span>
                  </div>
                  {renderStars(product.rating)}
                </div>
                
                <h3 className="text-xl font-bold text-[#737373] mb-2 font-barlow">{product.name}</h3>
                <p className="text-[#737373] mb-4 line-clamp-2 font-open-sans">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#737373] mb-2 font-barlow">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="text-sm text-[#737373] flex items-center space-x-2 font-open-sans">
                        <div className="w-1.5 h-1.5 bg-[#FFBD59] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#737373] font-barlow">{product.price}</div>
                  <button className="bg-[#FFBD59] text-[#737373] px-4 py-2 rounded-lg hover:bg-[#E6AC47] transition-colors flex items-center space-x-1 font-open-sans">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full lg:w-64 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-[#FFBD59]" />
                      <span className="text-sm text-[#737373] bg-[#FFBD59] px-2 py-1 rounded capitalize font-open-sans">
                        {product.category}
                      </span>
                    </div>
                    {renderStars(product.rating)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#737373] mb-3 font-barlow">{product.name}</h3>
                  <p className="text-[#737373] mb-4 font-open-sans">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#737373] mb-2 font-barlow">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#FFBD59] rounded-full"></div>
                          <span className="text-sm text-[#737373] font-open-sans">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#737373] font-barlow">{product.price}</div>
                    <button className="bg-[#FFBD59] text-[#737373] px-6 py-3 rounded-lg hover:bg-[#E6AC47] transition-colors flex items-center space-x-2 font-open-sans">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
