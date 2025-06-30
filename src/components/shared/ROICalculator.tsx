'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '../ui/enhanced-button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useState, type FormEvent } from 'react';
import { DollarSign, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyCost, setMonthlyCost] = useState(1000);
  const [hoursSaved, setHoursSaved] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [roi, setRoi] = useState<number | null>(null);

  const calculateRoi = (e: FormEvent) => {
    e.preventDefault();
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
          className="text-3xl font-bold text-center text-foreground sm:text-4xl md:text-5xl mb-4"
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12">
          Estimate the return on investment you could achieve by implementing FlowAI Gateway solutions. Adjust the values to match your business specifics.
        </p>
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center"><DollarSign className="mr-2 h-6 w-6 text-primary"/>ROI Estimator</CardTitle>
            <CardDescription>See how FlowAI Gateway can impact your bottom line.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={calculateRoi} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyCost">Estimated Monthly Cost of FlowAI ($)</Label>
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
              <EnhancedButton type="submit" variant="secondary" glow className="w-full">
                Calculate ROI <Zap className="ml-2 h-4 w-4 group-hover:animate-ping"/>
              </EnhancedButton>
            </form>
            {roi !== null && (
              <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                <p className="text-lg text-muted-foreground">Estimated Monthly ROI:</p>
                <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">{roi.toFixed(2)}%</p>
                <p className="text-sm text-muted-foreground mt-2">This is an estimate. Actual ROI may vary.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
