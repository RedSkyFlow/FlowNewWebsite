// src/components/shared/ROICalculator.tsx
'use client';

import { useState, type FormEvent } from 'react';
import { DollarSign, Zap } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '../ui/enhanced-button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import GlassCard from './GlassCard';

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

export default ROICalculator;
