
'use client';

import React from 'react';
import { LucideProps } from 'lucide-react';
import { ICONS } from '@/lib/constants';

type IconMapperProps = {
  iconName: keyof typeof ICONS;
} & LucideProps;

const IconMapper: React.FC<IconMapperProps> = ({ iconName, ...props }) => {
  const IconComponent = ICONS[iconName];

  if (!IconComponent) {
    // Return a default icon or null if the name is invalid
    return null;
  }

  return <IconComponent {...props} />;
};

export default IconMapper;
