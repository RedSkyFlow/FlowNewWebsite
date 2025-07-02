import React from 'react';

interface NeonGlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'profile' | 'feature' | 'premium';
  glowIntensity?: 'subtle' | 'medium' | 'intense';
  perspective?: 'slight' | 'medium' | 'dramatic';
  interactive?: boolean;
}

const NeonGlassCard: React.FC<NeonGlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  glowIntensity = 'medium',
  perspective = 'medium',
  interactive = true
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'profile':
        return 'neon-glass-profile';
      case 'feature':
        return 'neon-glass-feature';
      case 'premium':
        return 'neon-glass-premium';
      default:
        return 'neon-glass-default';
    }
  };

  const getGlowClass = () => `neon-glow-${glowIntensity}`;
  const getPerspectiveClass = () => `perspective-${perspective}`;
  const getInteractiveClass = () => interactive ? 'neon-interactive' : '';

  return (
    <div className={`neon-glass-container ${getPerspectiveClass()} ${className}`}>
      <div 
        className={`
          neon-glass-card 
          ${getVariantStyles()} 
          ${getGlowClass()} 
          ${getInteractiveClass()}
        `}
      >
        {/* Glass Surface */}
        <div className="neon-glass-surface">
          {/* Neon Edge Glow */}
          <div className="neon-edge-glow"></div>
          
          {/* Inner Glow */}
          <div className="neon-inner-glow"></div>
          
          {/* Reflection Layer */}
          <div className="neon-reflection"></div>
          
          {/* Content Layer */}
          <div className="neon-content">
            {children}
          </div>
          
          {/* Highlight Shimmer */}
          <div className="neon-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default NeonGlassCard;

