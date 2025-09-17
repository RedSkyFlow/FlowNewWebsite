/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ElementType, type ReactNode } from 'react';

type ScrollAnimatedSectionProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
};

export default function ScrollAnimatedSection<T extends ElementType = 'div'>({
  children,
  as,
  ...rest
}: ScrollAnimatedSectionProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ScrollAnimatedSectionProps<T>>) {
  const Component = as || 'div';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Component ref={ref} {...rest} style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'none' : 'translateY(50px)', transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s' }}>
      {children}
    </Component>
  );
}