
import React from 'react';
import { Wifi, Shield, BarChart3, MapPin, Users, Zap } from 'lucide-react';
import NeonGlassCard from './NeonGlassCard';

// Pre-built Flow Networks Profile Card
export const FlowNetworksProfileCard: React.FC<{
  name: string;
  title: string;
  avatar?: string;
  stats?: { label: string; value: string }[];
  contact?: string;
}> = ({ name, title, avatar, stats, contact }) => (
  <NeonGlassCard variant="profile" glowIntensity="medium" interactive>
    <div className="flex flex-col items-center text-center h-full">
      {/* Flow Networks Logo/Icon */}
      <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
        <Wifi className="w-8 h-8 text-white" />
      </div>
      
      {/* Avatar */}
      {avatar ? (
        <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 border-teal-400 shadow-lg shadow-teal-400/30">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full mb-4 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
          <Users className="w-10 h-10 text-white" />
        </div>
      )}
      
      {/* Name & Title */}
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-teal-300 mb-6 opacity-90">{title}</p>
      
      {/* Stats */}
      {stats && (
        <div className="flex justify-around w-full mb-6 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-teal-300 opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {/* Contact */}
      {contact && (
        <div className="mt-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-teal-400/30">
            <span className="text-sm text-teal-300">{contact}</span>
          </div>
        </div>
      )}
    </div>
  </NeonGlassCard>
);

// Flow Networks Feature Card
export const FlowNetworksFeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  premium?: boolean;
}> = ({ icon, title, description, features, premium = false }) => (
  <NeonGlassCard 
    variant={premium ? "premium" : "feature"} 
    glowIntensity={premium ? "intense" : "medium"}
    interactive
    className="h-full"
  >
    <div className="flex flex-col h-full">
      {/* Icon & Title */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mr-4 shadow-lg shadow-teal-400/30">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-teal-100 opacity-90 mb-6 leading-relaxed">{description}</p>
      
      {/* Features */}
      {features && (
        <div className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-teal-200">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 shadow-sm shadow-teal-400/50"></div>
              {feature}
            </div>
          ))}
        </div>
      )}
    </div>
  </NeonGlassCard>
);

// Flow Networks Service Card
export const FlowNetworksServiceCard: React.FC<{
  service: string;
  description: string;
  metrics?: { label: string; value: string; trend?: 'up' | 'down' | 'stable' }[];
  status?: 'active' | 'inactive' | 'maintenance';
}> = ({ service, description, metrics, status = 'active' }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'inactive': return 'text-red-400';
      case 'maintenance': return 'text-yellow-400';
      default: return 'text-teal-400';
    }
  };

  return (
    <NeonGlassCard variant="default" glowIntensity="medium" interactive>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">{service}</h3>
          <div className={`w-3 h-3 rounded-full ${getStatusColor().replace('text-', 'bg-')} shadow-lg`}></div>
        </div>
        
        {/* Description */}
        <p className="text-teal-100 opacity-90 mb-6 text-sm leading-relaxed">{description}</p>
        
        {/* Metrics */}
        {metrics && (
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-teal-300 opacity-80">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </NeonGlassCard>
  );
};
