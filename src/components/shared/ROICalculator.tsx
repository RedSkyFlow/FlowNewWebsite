// src/components/shared/ROICalculator.tsx
'use client';

import { useState, type FormEvent } from 'react';
import { DollarSign, Zap } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '../ui/enhanced-button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import GlassCard from './GlassCard'; // CORRECTED: Import GlassCard

const ROICalculator = () => {
  const [monthlyCost, setMonthlyCost] = useState(1000);
  const [hoursSaved, setHoursSaved] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [roi, setRoi] = useState<number | null>(null);

  const calculateRoi = (e: FormEvent) => {
    e.preventDefault();
    if (monthlyCost <= 0) {
      setRoi(0); // Avoid division by zero
      return;
    }
    const monthlySavings = hoursSaved * hourlyRate;
    const netMonthlyProfit = monthlySavings - monthlyCost;
    const calculatedRoi = (netMonthlyProfit / monthlyCost) * 100;
    setRoi(calculatedRoi);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading 
          text="Calculate Your Potential ROI" 
          as="h2" 
          className="text-3xl font-bold text-center sm:text-4xl md:text-5xl mb-4"
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground font-body md:text-lg mb-12">
          Estimate the return on investment you could achieve by implementing Flow Networks solutions. Adjust the values to match your business specifics.
        </p>
        {/* CORRECTED: Replaced Card with GlassCard and removed hard-coded shadow */}
        <GlassCard className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><DollarSign className="mr-2 h-6 w-6 text-primary"/>ROI Estimator</CardTitle>
            <CardDescription>See how our solutions can impact your bottom line.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={calculateRoi} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyCost">Estimated Monthly Solution Cost ($)</Label>
                <Input id="monthlyCost" type="number" value={monthlyCost} onChange={(e) => setMonthlyCost(Number(e.target.value))} placeholder="e.g., 1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hoursSaved">Monthly Hours Saved by Automation</Label>
                <Input id="hoursSaved" type="number" value={hoursSaved} onChange={(e) => setHoursSaved(Number(e.target.value))} placeholder="e.g., 40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Average Employee Hourly Rate ($)</Label>
                <Input id="hourlyRate" type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} placeholder="e.g., 50" />
              </div>
              <EnhancedButton type="submit" variant="secondary" glow className="w-full group">
                Calculate ROI 
                {/* CORRECTED: More subtle and elegant icon animation */}
                <Zap className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </EnhancedButton>
            </form>
            {roi !== null && (
              <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                <p className="text-lg text-muted-foreground font-body">Estimated Monthly ROI:</p>
                <p className="text-4xl font-bold text-primary">{roi.toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground mt-2 font-body">This is an estimate. Actual ROI may vary based on implementation.</p>
              </div>
            )}
          </CardContent>
        </GlassCard>
      </div>
    </section>
  );
};

export default ROICalculator;```

**Summary of Corrections:**
1.  **Visual Upgrade:** Replaced the standard `Card` with our `GlassCard` component, which automatically removes the need for a manual `shadow-xl` and integrates the component into our visual language.
2.  **UX Polish:** Changed the button icon's animation from a jarring `ping` to a subtle `rotate`, which is more aligned with our premium aesthetic.
3.  **Typography:** Applied `font-body` to descriptive text for consistency.

This component is now fully compliant and visually refined.

**Ready for the next file.**
---
### **File 2 of 4: `Logo (1).tsx`**

**Executive Assessment:** **Action Required.** The component is structurally sound but contains a critical asset path error that must be corrected.

**Detailed Analysis:**
*   **The Problem:** The `Image` component `src` is `/Images/Flow-2D-logo.png.png`. The double `.png` extension is a typo and will cause the image to fail to load, resulting in a broken image icon.
*   **The Fix:** Remove the extraneous `.png` from the file path.

---

**Definitive Code for `Logo.tsx`:**

```tsx
// src/components/shared/Logo.tsx
import Link from 'next/link';
import Image from "next/image";
import { cn } from '@/lib/utils';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      {/* CORRECTED: Removed the duplicate .png extension from the image path */}
      <Image
        src="/Images/Flow-2D-logo.png"
        alt="Flow Networks Logo"
        width={40} 
        height={40}
        className="mr-3 h-10 w-auto" // Added a bit more margin for spacing
        priority 
      />
      <span className="font-headline text-xl font-bold text-foreground min-w-0 truncate">
        Flow Networks
      </span>
    </Link>
  );
};

export default Logo;