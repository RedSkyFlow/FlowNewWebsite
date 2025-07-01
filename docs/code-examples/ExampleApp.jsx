import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Copy, Palette, Code, Zap, Eye, Download, ExternalLink, Sparkles, Layers, MousePointer, Wifi, BarChart3, Users, Shield, MapPin, Smartphone } from 'lucide-react'
import './App.css'

function App() {
  const [copiedColor, setCopiedColor] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(label)
    setTimeout(() => setCopiedColor(''), 2000)
  }

  const brandColors = {
    primary: [
      { name: 'Background Dark Primary', hex: '#0A0903', description: 'Main page background', rgb: '10, 9, 3' },
      { name: 'Background Dark Secondary', hex: '#0F0E08', description: 'Cards, modals, input fields', rgb: '15, 14, 8' },
      { name: 'Flow Primary Teal', hex: '#007A80', description: 'Authority, intelligence, security', rgb: '0, 122, 128' },
      { name: 'Flow Accent Gold', hex: '#D4AF37', description: 'Premium, value, innovation', rgb: '212, 175, 55' },
      { name: 'Flow Action Blue', hex: '#0282F2', description: 'Primary CTAs, links, active states', rgb: '2, 130, 242' }
    ],
    secondary: [
      { name: 'Flow Digital Purple', hex: '#6A0DAD', description: 'Digital innovation, secondary accents', rgb: '106, 13, 173' },
      { name: 'Flow Impact Orange', hex: '#F46036', description: 'Secondary CTAs, attention highlights', rgb: '244, 96, 54' },
      { name: 'Flow Highlight Yellow', hex: '#FFCB47', description: 'Subtle highlights, data accents', rgb: '255, 203, 71' }
    ],
    text: [
      { name: 'Text Light', hex: '#E2FDFF', description: 'Primary text and light elements', rgb: '226, 253, 255' },
      { name: 'Detail Dark', hex: '#2D2C27', description: 'Borders, dividers, secondary text', rgb: '45, 44, 39' }
    ]
  }

  const implementationSteps = [
    {
      title: 'Site Background & Theme',
      time: '5 minutes',
      priority: 'High',
      icon: '🎨',
      steps: [
        'Go to Site Design → Theme',
        'Change background to #0A0903',
        'Set secondary backgrounds to #0F0E08'
      ]
    },
    {
      title: 'Navigation & Header',
      time: '10 minutes',
      priority: 'High',
      icon: '🧭',
      steps: [
        'Update navigation background to #0A0903',
        'Set text color to #E2FDFF',
        'Add subtle glow effect to active states'
      ]
    },
    {
      title: 'Buttons & CTAs',
      time: '15 minutes',
      priority: 'Medium',
      icon: '🔘',
      steps: [
        'Primary buttons: Background #0282F2, Text #E2FDFF',
        'Secondary buttons: Background #F46036, Text #E2FDFF',
        'Add hover glow effects'
      ]
    },
    {
      title: 'Typography Updates',
      time: '10 minutes',
      priority: 'Medium',
      icon: '📝',
      steps: [
        'Headings: Color #E2FDFF, Font Inter/Roboto',
        'Body text: Color #E2FDFF, 16-18px',
        'Links: Color #0282F2'
      ]
    },
    {
      title: 'Hero Section Transformation',
      time: '20 minutes',
      priority: 'High',
      icon: '⚡',
      steps: [
        'Dark background with gradient overlay',
        'Update headline to "Intelligent Venue WiFi"',
        'Add Fundly-inspired card elements',
        'Implement layered visual effects'
      ]
    }
  ]

  const fundlyEffects = [
    {
      name: '3D Card Perspective',
      description: 'Layered cards with depth and perspective using CSS transforms',
      code: 'transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);',
      demo: 'perspective'
    },
    {
      name: 'Gradient Overlays',
      description: 'Smooth gradients from orange to blue for premium feel',
      code: 'background: linear-gradient(135deg, #F46036 0%, #0282F2 100%);',
      demo: 'gradient'
    },
    {
      name: 'Glow Effects',
      description: 'Subtle glows around important elements and CTAs',
      code: 'box-shadow: 0 0 20px rgba(2, 130, 242, 0.3);',
      demo: 'glow'
    },
    {
      name: 'Floating Animation',
      description: 'Subtle hover lift effects for interactive elements',
      code: 'transform: translateY(-4px); transition: all 0.3s ease;',
      demo: 'float'
    },
    {
      name: 'Glassmorphism',
      description: 'Translucent glass effect with backdrop blur',
      code: 'backdrop-filter: blur(10px); background: rgba(255,255,255,0.1);',
      demo: 'glass'
    },
    {
      name: 'Particle Effects',
      description: 'Animated background particles for dynamic feel',
      code: 'animation: float 6s ease-in-out infinite;',
      demo: 'particles'
    }
  ]

  const mobileFeatures = [
    {
      title: 'WiFi Analytics Dashboard',
      description: 'Real-time venue insights and customer behavior analytics',
      icon: <BarChart3 className="h-6 w-6" />,
      orientation: 'straight',
      content: {
        header: 'WiFi Analytics',
        stats: [
          { label: 'Active Users', value: '1,247', color: '#007A80' },
          { label: 'Data Usage', value: '2.4TB', color: '#0282F2' },
          { label: 'Peak Hours', value: '6-9PM', color: '#D4AF37' }
        ]
      }
    },
    {
      title: 'Guest Engagement Portal',
      description: 'Seamless guest onboarding and personalized experiences',
      icon: <Users className="h-6 w-6" />,
      orientation: 'right-lean',
      content: {
        header: 'Welcome to FlowVenue',
        features: ['Free WiFi Access', 'Venue Map', 'Special Offers', 'Event Updates']
      }
    },
    {
      title: 'Network Security Monitor',
      description: 'Advanced threat detection and network protection',
      icon: <Shield className="h-6 w-6" />,
      orientation: 'left-lean',
      content: {
        header: 'Security Status',
        status: 'Protected',
        threats: '0 Threats Blocked',
        uptime: '99.9% Uptime'
      }
    },
    {
      title: 'Location Intelligence',
      description: 'Heat maps and customer journey analytics',
      icon: <MapPin className="h-6 w-6" />,
      orientation: 'right',
      content: {
        header: 'Venue Insights',
        zones: ['Entrance: 45%', 'Dining: 32%', 'Retail: 23%']
      }
    }
  ]

  // iPhone Component
  const iPhone = ({ orientation = 'straight', content, className = '' }) => {
    const getTransform = () => {
      switch (orientation) {
        case 'right': return 'rotateY(25deg)'
        case 'left': return 'rotateY(-25deg)'
        case 'right-lean': return 'rotateY(15deg) rotateX(-5deg)'
        case 'left-lean': return 'rotateY(-15deg) rotateX(-5deg)'
        default: return 'rotateY(0deg)'
      }
    }

    return (
      <div 
        className={`relative ${className}`}
        style={{
          transform: `perspective(1000px) ${getTransform()}`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* iPhone Frame */}
        <div className="relative w-48 h-96 bg-black rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-[#0A0903] to-[#0F0E08] text-white p-4 pt-8">
              {content}
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0903] text-[#E2FDFF] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A80]/5 via-[#0A0903] to-[#6A0DAD]/5"></div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#007A80] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        {/* Mouse Follower Glow */}
        <div
          className="absolute w-96 h-96 bg-[#007A80]/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A80]/20 via-[#0A0903] to-[#6A0DAD]/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#007A80]/20 backdrop-blur-md text-[#E2FDFF] hover:bg-[#007A80]/30 border border-[#007A80]/30 transition-all duration-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Brand Implementation Guide
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E2FDFF] via-[#D4AF37] to-[#0282F2] bg-clip-text text-transparent animate-pulse">
              Flow Networks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#E2FDFF]/80">
              Intelligent Venue WiFi Solutions
            </p>
            <p className="text-lg mb-12 text-[#E2FDFF]/60 max-w-2xl mx-auto">
              Complete brand implementation guide with iPhone mockups showcasing mobile features, 
              Fundly-inspired visual effects, and step-by-step instructions for transforming your Wix site.
            </p>
            
            {/* iPhone Mockup Hero Display */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                {/* Main iPhone */}
                <iPhone 
                  orientation="straight"
                  className="hover:scale-105 transition-all duration-500"
                  content={
                    <div className="h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="text-[#007A80] text-sm font-medium mb-2">Flow Networks</div>
                        <div className="text-white text-lg font-bold">Venue Dashboard</div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="bg-gradient-to-r from-[#007A80]/20 to-[#0282F2]/20 backdrop-blur-sm rounded-lg p-3 border border-[#007A80]/30">
                          <div className="text-[#D4AF37] text-xs">Active Users</div>
                          <div className="text-white text-xl font-bold">1,247</div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#F46036]/20 to-[#D4AF37]/20 backdrop-blur-sm rounded-lg p-3 border border-[#F46036]/30">
                          <div className="text-[#FFCB47] text-xs">Data Usage</div>
                          <div className="text-white text-xl font-bold">2.4TB</div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#6A0DAD]/20 to-[#007A80]/20 backdrop-blur-sm rounded-lg p-3 border border-[#6A0DAD]/30">
                          <div className="text-[#E2FDFF] text-xs">Network Status</div>
                          <div className="text-white text-lg font-bold">Optimal</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <div className="text-[#007A80] text-xs">•••• 2116</div>
                      </div>
                    </div>
                  }
                />
                
                {/* Background iPhones */}
                <iPhone 
                  orientation="right-lean"
                  className="absolute -top-8 -right-12 opacity-60 scale-75"
                  content={
                    <div className="h-full bg-gradient-to-br from-[#F46036] to-[#0282F2] flex items-center justify-center">
                      <div className="text-center">
                        <Wifi className="h-12 w-12 text-white mx-auto mb-4" />
                        <div className="text-white font-bold">Guest Portal</div>
                      </div>
                    </div>
                  }
                />
                
                <iPhone 
                  orientation="left-lean"
                  className="absolute -top-8 -left-12 opacity-60 scale-75"
                  content={
                    <div className="h-full bg-gradient-to-br from-[#6A0DAD] to-[#007A80] flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                        <div className="text-white font-bold">Security</div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#0282F2]/20 backdrop-blur-md hover:bg-[#0282F2]/30 text-[#E2FDFF] px-8 py-3 text-lg border border-[#0282F2]/30 hover:border-[#0282F2]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0282F2]/25 hover:-translate-y-1"
                onClick={() => document.getElementById('mobile-features').scrollIntoView({ behavior: 'smooth' })}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                View Mobile Features
              </Button>
              <Button 
                variant="outline" 
                className="border-[#007A80]/30 text-[#007A80] hover:bg-[#007A80]/20 hover:text-[#E2FDFF] px-8 py-3 text-lg backdrop-blur-md hover:border-[#007A80]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#007A80]/25 hover:-translate-y-1"
                onClick={() => document.getElementById('colors').scrollIntoView({ behavior: 'smooth' })}
              >
                <Palette className="mr-2 h-5 w-5" />
                View Colors
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Features Section */}
      <section id="mobile-features" className="py-20 bg-[#0F0E08]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Smartphone className="mr-3 h-8 w-8 text-[#D4AF37]" />
              Mobile App Features
            </h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Intelligent venue WiFi solutions in your pocket
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mobileFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-[#0A0903]/30 backdrop-blur-md border-[#007A80]/20 hover:border-[#007A80]/40 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 122, 128, 0.1)'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-6">
                      <div className="flex items-center mb-4">
                        <div className="text-[#D4AF37] mr-3">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-[#E2FDFF] group-hover:text-[#D4AF37] transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-[#E2FDFF]/70 mb-6 text-base">
                        {feature.description}
                      </CardDescription>
                      
                      {/* Feature Details */}
                      <div className="space-y-3">
                        {feature.content.stats && feature.content.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="flex justify-between items-center p-2 bg-[#0F0E08]/50 rounded-lg border border-[#007A80]/10">
                            <span className="text-[#E2FDFF]/80 text-sm">{stat.label}</span>
                            <span className="font-bold" style={{ color: stat.color }}>{stat.value}</span>
                          </div>
                        ))}
                        
                        {feature.content.features && (
                          <div className="space-y-2">
                            {feature.content.features.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center text-[#E2FDFF]/80 text-sm">
                                <span className="text-[#007A80] mr-2">•</span>
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.content.status && (
                          <div className="space-y-2">
                            <div className="text-[#D4AF37] font-semibold">{feature.content.status}</div>
                            <div className="text-[#E2FDFF]/80 text-sm">{feature.content.threats}</div>
                            <div className="text-[#007A80] text-sm">{feature.content.uptime}</div>
                          </div>
                        )}
                        
                        {feature.content.zones && (
                          <div className="space-y-2">
                            {feature.content.zones.map((zone, zoneIndex) => (
                              <div key={zoneIndex} className="text-[#E2FDFF]/80 text-sm">
                                <span className="text-[#007A80] mr-2">•</span>
                                {zone}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* iPhone Mockup */}
                    <div className="flex-shrink-0">
                      <iPhone 
                        orientation={feature.orientation}
                        className="group-hover:scale-110 transition-all duration-500"
                        content={
                          <div className="h-full flex flex-col p-2">
                            <div className="text-center mb-4">
                              <div className="text-[#007A80] text-xs font-medium mb-1">Flow Networks</div>
                              <div className="text-white text-sm font-bold">{feature.content.header}</div>
                            </div>
                            
                            <div className="flex-1 space-y-2">
                              {feature.content.stats && feature.content.stats.map((stat, statIndex) => (
                                <div key={statIndex} className="bg-black/20 backdrop-blur-sm rounded p-2 border border-white/10">
                                  <div className="text-[#D4AF37] text-xs">{stat.label}</div>
                                  <div className="text-white text-sm font-bold">{stat.value}</div>
                                </div>
                              ))}
                              
                              {feature.content.features && feature.content.features.map((item, itemIndex) => (
                                <div key={itemIndex} className="bg-black/20 backdrop-blur-sm rounded p-2 border border-white/10">
                                  <div className="text-white text-xs">{item}</div>
                                </div>
                              ))}
                              
                              {feature.content.status && (
                                <>
                                  <div className="bg-green-500/20 backdrop-blur-sm rounded p-2 border border-green-500/30">
                                    <div className="text-green-400 text-xs font-bold">{feature.content.status}</div>
                                  </div>
                                  <div className="bg-black/20 backdrop-blur-sm rounded p-2 border border-white/10">
                                    <div className="text-white text-xs">{feature.content.threats}</div>
                                  </div>
                                </>
                              )}
                              
                              {feature.content.zones && feature.content.zones.map((zone, zoneIndex) => (
                                <div key={zoneIndex} className="bg-black/20 backdrop-blur-sm rounded p-2 border border-white/10">
                                  <div className="text-white text-xs">{zone}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section id="colors" className="py-20 bg-[#0F0E08]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Brand Color Palette</h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Copy-paste ready hex codes for immediate implementation
            </p>
          </div>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#0A0903]/50 backdrop-blur-md border border-[#007A80]/20">
              <TabsTrigger value="primary" className="data-[state=active]:bg-[#007A80]/20 data-[state=active]:text-[#E2FDFF] backdrop-blur-md">
                Primary Colors
              </TabsTrigger>
              <TabsTrigger value="secondary" className="data-[state=active]:bg-[#007A80]/20 data-[state=active]:text-[#E2FDFF] backdrop-blur-md">
                Secondary Colors
              </TabsTrigger>
              <TabsTrigger value="text" className="data-[state=active]:bg-[#007A80]/20 data-[state=active]:text-[#E2FDFF] backdrop-blur-md">
                Text Colors
              </TabsTrigger>
            </TabsList>

            {Object.entries(brandColors).map(([category, colors]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colors.map((color, index) => (
                    <Card 
                      key={index} 
                      className="bg-[#0A0903]/30 backdrop-blur-md border-[#007A80]/20 hover:border-[#007A80]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
                      style={{
                        boxShadow: '0 8px 32px rgba(0, 122, 128, 0.1)'
                      }}
                    >
                      <CardHeader className="pb-4">
                        <div 
                          className="w-full h-20 rounded-lg mb-4 border border-[#E2FDFF]/10 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: color.hex }}
                        >
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at center, rgba(${color.rgb}, 0.3) 0%, transparent 70%)`
                            }}
                          ></div>
                        </div>
                        <CardTitle className="text-[#E2FDFF] text-lg group-hover:text-[#D4AF37] transition-colors duration-300">
                          {color.name}
                        </CardTitle>
                        <CardDescription className="text-[#E2FDFF]/60">
                          {color.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <code className="bg-[#0F0E08]/50 backdrop-blur-sm px-3 py-1 rounded text-[#D4AF37] font-mono border border-[#007A80]/20">
                            {color.hex}
                          </code>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(color.hex, color.name)}
                            className="text-[#007A80] hover:text-[#E2FDFF] hover:bg-[#007A80]/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                          >
                            <Copy className="h-4 w-4" />
                            {copiedColor === color.name ? 'Copied!' : 'Copy'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Implementation Guide Section */}
      <section id="implementation" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Implementation Guide</h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Step-by-step instructions prioritized by impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {implementationSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-[#0F0E08]/30 backdrop-blur-md border-[#007A80]/20 hover:border-[#007A80]/40 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 group"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 122, 128, 0.1)',
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 2}deg) rotateY(${Math.cos(index) * 2}deg)`
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={step.priority === 'High' ? 'default' : 'secondary'}
                      className={`${step.priority === 'High' ? 'bg-[#F46036]/20 text-[#E2FDFF] border-[#F46036]/30' : 'bg-[#6A0DAD]/20 text-[#E2FDFF] border-[#6A0DAD]/30'} backdrop-blur-md`}
                    >
                      {step.priority} Priority
                    </Badge>
                    <span className="text-[#D4AF37] font-semibold">{step.time}</span>
                  </div>
                  <CardTitle className="text-[#E2FDFF] flex items-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    <span className="text-2xl mr-3">{step.icon}</span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.steps.map((stepItem, stepIndex) => (
                      <li key={stepIndex} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${stepIndex * 100}ms` }}>
                        <span className="text-[#007A80] mr-2">•</span>
                        <span className="text-[#E2FDFF]/80">{stepItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Fundly-Inspired Effects Section */}
      <section className="py-20 bg-[#0F0E08]/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Layers className="mr-3 h-8 w-8 text-[#D4AF37]" />
              Advanced Visual Effects
            </h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Fundly-inspired techniques with glassmorphic design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundlyEffects.map((effect, index) => (
              <Card 
                key={index} 
                className={`bg-[#0A0903]/20 backdrop-blur-md border-[#007A80]/20 hover:border-[#007A80]/40 transition-all duration-500 group cursor-pointer
                  ${effect.demo === 'perspective' ? 'hover:transform hover:perspective-1000 hover:rotateX-5 hover:rotateY-5' : ''}
                  ${effect.demo === 'float' ? 'hover:transform hover:-translate-y-4' : ''}
                  ${effect.demo === 'glow' ? 'hover:shadow-2xl hover:shadow-[#0282F2]/25' : ''}
                  ${effect.demo === 'glass' ? 'hover:bg-[#E2FDFF]/5' : ''}
                `}
                style={{
                  boxShadow: effect.demo === 'glow' ? '0 8px 32px rgba(2, 130, 242, 0.15)' : '0 8px 32px rgba(0, 122, 128, 0.1)'
                }}
              >
                <CardHeader>
                  <CardTitle className="text-[#E2FDFF] flex items-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    <Eye className="mr-2 h-5 w-5 text-[#D4AF37]" />
                    {effect.name}
                  </CardTitle>
                  <CardDescription className="text-[#E2FDFF]/70">
                    {effect.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#0F0E08]/50 backdrop-blur-sm p-4 rounded-lg border border-[#007A80]/10 mb-4">
                    <code className="text-[#D4AF37] font-mono text-sm break-all">
                      {effect.code}
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(effect.code, effect.name)}
                    className="w-full text-[#007A80] hover:text-[#E2FDFF] hover:bg-[#007A80]/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy CSS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive iPhone Demo Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <MousePointer className="mr-3 h-8 w-8 text-[#D4AF37]" />
              Interactive iPhone Demo
            </h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Hover and interact with these mobile interfaces
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* iPhone Collection */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              {[
                { orientation: 'left-lean', bg: 'from-[#F46036] to-[#0282F2]', icon: <Wifi className="h-8 w-8" />, title: 'WiFi Portal' },
                { orientation: 'straight', bg: 'from-[#007A80] to-[#6A0DAD]', icon: <BarChart3 className="h-8 w-8" />, title: 'Analytics' },
                { orientation: 'right-lean', bg: 'from-[#D4AF37] to-[#FFCB47]', icon: <Shield className="h-8 w-8" />, title: 'Security' }
              ].map((phone, i) => (
                <iPhone
                  key={i}
                  orientation={phone.orientation}
                  className="hover:scale-110 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  content={
                    <div className={`h-full bg-gradient-to-br ${phone.bg} flex flex-col items-center justify-center text-white`}>
                      <div className="mb-4 opacity-80">
                        {phone.icon}
                      </div>
                      <div className="font-bold text-lg mb-2">{phone.title}</div>
                      <div className="text-sm opacity-70">Flow Networks</div>
                      
                      <div className="mt-6 space-y-2 w-full px-4">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="bg-white/20 backdrop-blur-sm rounded p-2 border border-white/30">
                            <div className="h-2 bg-white/40 rounded animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Messaging Section */}
      <section className="py-20 bg-[#0F0E08]/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Messaging</h2>
            <p className="text-xl text-[#E2FDFF]/70">
              Strategic terminology for expert positioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Intelligent Venue WiFi',
              'Location Analytics',
              'WiFi Marketing',
              'Secure AI Gateway',
              'Future-ready intelligence',
              'Next-gen venue insights'
            ].map((term, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-[#007A80]/10 to-[#6A0DAD]/10 backdrop-blur-md border-[#007A80]/20 text-center p-6 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 122, 128, 0.1)'
                }}
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#E2FDFF] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {term}
                  </h3>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(term, term)}
                    className="text-[#D4AF37] hover:text-[#E2FDFF] hover:bg-[#D4AF37]/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0F0E08]/50 backdrop-blur-md border-t border-[#007A80]/20 relative">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#E2FDFF]">Flow Networks</h3>
          <p className="text-[#E2FDFF]/60 mb-6">
            Transforming venues with intelligent WiFi solutions
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-[#007A80]/20 text-[#E2FDFF] backdrop-blur-md border border-[#007A80]/30">AI Gateway</Badge>
            <Badge className="bg-[#D4AF37]/20 text-[#E2FDFF] backdrop-blur-md border border-[#D4AF37]/30">Premium</Badge>
            <Badge className="bg-[#0282F2]/20 text-[#E2FDFF] backdrop-blur-md border border-[#0282F2]/30">Innovation</Badge>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-5 { transform: rotateX(5deg); }
        .rotate-y-5 { transform: rotateY(5deg); }
        .rotate-y-[-5deg] { transform: rotateY(-5deg); }
        .rotate-x-[5deg] { transform: rotateX(5deg); }
        .hover\\:rotate-x-5:hover { transform: rotateX(5deg); }
        .hover\\:rotate-y-5:hover { transform: rotateY(5deg); }
        .hover\\:rotateX-5:hover { transform: rotateX(-5deg); }
        .hover\\:rotateY-5:hover { transform: rotateY(-5deg); }
      `}</style>
    </div>
  )
}

export default App

