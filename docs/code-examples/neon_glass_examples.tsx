import React from 'react';
import { Wifi, Shield, BarChart3, MapPin, Users, Zap } from 'lucide-react';
import NeonGlassCard from './neon_glass_card_component';

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

// Usage Examples Component
export const NeonGlassExamples: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Flow Networks Neon Glass Cards
        </h1>
        
        {/* Profile Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Profile Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlowNetworksProfileCard
              name="Sarah Chen"
              title="Network Engineer"
              stats={[
                { label: "Venues", value: "24" },
                { label: "Uptime", value: "99.9%" },
                { label: "Users", value: "15K" }
              ]}
              contact="sarah.chen@flownetworks.ai"
            />
            
            <FlowNetworksProfileCard
              name="Flow Networks"
              title="AI-Powered WiFi Solutions"
              stats={[
                { label: "Locations", value: "500+" },
                { label: "Clients", value: "50K+" },
                { label: "Uptime", value: "99.99%" }
              ]}
              contact="hello@flownetworks.ai"
            />
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Feature Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlowNetworksFeatureCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="Advanced Security"
              description="Enterprise-grade security with AI-powered threat detection and real-time monitoring."
              features={[
                "Real-time threat detection",
                "Automated response protocols",
                "Compliance reporting"
              ]}
            />
            
            <FlowNetworksFeatureCard
              icon={<BarChart3 className="w-6 h-6 text-white" />}
              title="Analytics Dashboard"
              description="Comprehensive insights into network performance and user behavior patterns."
              features={[
                "Real-time analytics",
                "Custom reporting",
                "Predictive insights"
              ]}
              premium
            />
            
            <FlowNetworksFeatureCard
              icon={<MapPin className="w-6 h-6 text-white" />}
              title="Location Intelligence"
              description="Advanced location-based services with heat mapping and zone analytics."
              features={[
                "Heat map visualization",
                "Zone-based analytics",
                "Customer journey tracking"
              ]}
            />
          </div>
        </section>
        
        {/* Service Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Service Status Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FlowNetworksServiceCard
              service="WiFi Gateway"
              description="Primary network access point with load balancing"
              metrics={[
                { label: "Uptime", value: "99.9%" },
                { label: "Users", value: "1,247" }
              ]}
              status="active"
            />
            
            <FlowNetworksServiceCard
              service="Analytics Engine"
              description="Real-time data processing and insights generation"
              metrics={[
                { label: "Processed", value: "2.4M" },
                { label: "Latency", value: "12ms" }
              ]}
              status="active"
            />
            
            <FlowNetworksServiceCard
              service="Security Monitor"
              description="Continuous threat detection and prevention system"
              metrics={[
                { label: "Threats", value: "0" },
                { label: "Scans", value: "847K" }
              ]}
              status="maintenance"
            />
            
            <FlowNetworksServiceCard
              service="Guest Portal"
              description="Customer onboarding and authentication service"
              metrics={[
                { label: "Sessions", value: "156" },
                { label: "Success", value: "98%" }
              ]}
              status="active"
            />
          </div>
        </section>
        
        {/* Custom Implementation Example */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Custom Implementation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NeonGlassCard variant="premium" glowIntensity="intense" interactive>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-400/30">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Plan</h3>
                <p className="text-yellow-200 mb-6">Enterprise-grade WiFi solutions with advanced AI analytics</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-100">Unlimited Devices</span>
                    <span className="text-yellow-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-100">AI Analytics</span>
                    <span className="text-yellow-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-100">24/7 Support</span>
                    <span className="text-yellow-400">✓</span>
                  </div>
                </div>
              </div>
            </NeonGlassCard>
            
            <NeonGlassCard variant="default" glowIntensity="subtle" interactive>
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Network Overview</h3>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-teal-100">Total Venues</span>
                    <span className="text-white font-bold">247</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-teal-100">Active Users</span>
                    <span className="text-white font-bold">15,432</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-teal-100">Data Processed</span>
                    <span className="text-white font-bold">2.4 TB</span>
                  </div>
                </div>
              </div>
            </NeonGlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NeonGlassExamples;

