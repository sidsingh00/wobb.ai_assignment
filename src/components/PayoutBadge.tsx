import React from 'react';
import { Gift, RefreshCw, Wallet } from 'lucide-react';
import { PayoutType } from '../types';

interface PayoutBadgeProps {
  type: PayoutType;
  details: string;
}

const PayoutBadge: React.FC<PayoutBadgeProps> = ({ type, details }) => {
  const getBadgeContent = () => {
    switch (type) {
      case 'barter':
        return {
          icon: <Gift className="w-4 h-4" />,
          label: 'Barter',
          className: 'bg-purple-100 text-purple-700',
        };
      case 'refund':
        return {
          icon: <RefreshCw className="w-4 h-4" />,
          label: 'Refund',
          className: 'bg-blue-100 text-blue-700',
        };
      case 'fixed':
        return {
          icon: <Wallet className="w-4 h-4" />,
          label: 'Fixed Pay',
          className: 'bg-green-100 text-green-700',
        };
    }
  };

  const content = getBadgeContent();

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${content.className}`}>
      {content.icon}
      <span className="text-sm font-medium">{details}</span>
    </div>
  );
};

export default PayoutBadge;