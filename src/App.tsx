import React, { useState } from 'react';
import Header from './components/Header';
import CampaignCard from './components/CampaignCard';
import { Campaign } from './types';

// Sample campaign data
const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    brandName: 'Nike',
    brandLogo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    campaignImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c',
    title: 'Sports Lifestyle Campaign',
    description: 'Share your authentic sports moments wearing Nike gear. Looking for creative content that showcases the intersection of sports and lifestyle.',
    payoutType: 'fixed',
    payoutDetails: '₹5000',
    totalSlots: 10,
    hiredCount: 6,
    category: 'Sports',
  },
  {
    id: '2',
    brandName: 'Sephora',
    brandLogo: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
    campaignImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    title: 'Beauty Influencer Collab',
    description: 'Create engaging content featuring our latest beauty products. Perfect for makeup artists and beauty enthusiasts.',
    payoutType: 'barter',
    payoutDetails: 'Products worth ₹10000',
    totalSlots: 5,
    hiredCount: 2,
    category: 'Beauty',
  },
  {
    id: '3',
    brandName: 'Zomato',
    brandLogo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    campaignImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
    title: 'Food Review Campaign',
    description: 'Share your authentic dining experiences and food reviews. Looking for foodies with a passion for discovering new restaurants.',
    payoutType: 'refund',
    payoutDetails: 'Up to ₹2000',
    totalSlots: 15,
    hiredCount: 8,
    category: 'Food',
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCampaigns = selectedCategory
    ? SAMPLE_CAMPAIGNS.filter(campaign => campaign.category === selectedCategory)
    : SAMPLE_CAMPAIGNS;

  const categories = Array.from(new Set(SAMPLE_CAMPAIGNS.map(campaign => campaign.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${!selectedCategory 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              All Campaigns
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;