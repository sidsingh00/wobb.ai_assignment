import React from 'react';
import { Campaign } from '../types';
import PayoutBadge from './PayoutBadge';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const progressPercentage = (campaign.hiredCount / campaign.totalSlots) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative h-48">
        <img
          src={campaign.campaignImage}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <img
              src={campaign.brandLogo}
              alt={campaign.brandName}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {campaign.title}
          </h3>
          <PayoutBadge type={campaign.payoutType} details={campaign.payoutDetails} />
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {campaign.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Hiring Progress</span>
            <span className="font-medium text-gray-900">
              {campaign.hiredCount}/{campaign.totalSlots} hired
            </span>
          </div>
          
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;