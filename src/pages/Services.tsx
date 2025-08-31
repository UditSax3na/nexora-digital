import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search,
  BarChart3,
  MessageSquare,
  PenTool,
  Target,
  Globe,
  Mail,
  Smartphone,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const mainServices = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic visibility and drive quality traffic with our comprehensive SEO strategies.',
      features: [
        'Technical SEO audits and optimization',
        'Keyword research and strategy',
        'On-page and off-page optimization',
        'Local SEO for businesses',
        'SEO content creation',
        'Monthly reporting and analytics'
      ],
      pricing: 'Starting at $2,500/month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other platforms.',
      features: [
        'Google Ads management',
        'Facebook & Instagram advertising',
        'LinkedIn advertising',
        'Campaign optimization',
        'Landing page creation',
        'Conversion tracking and reporting'
      ],
      pricing: 'Starting at $3,000/month + ad spend',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all major social media platforms.',
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Influencer partnerships',
        'Social media advertising',
        'Performance analytics'
      ],
      pricing: 'Starting at $2,000/month',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      features: [
        'Content strategy development',
        'Blog writing and optimization',
        'Video content creation',
        'Infographic design',
        'Email marketing campaigns',
        'Content distribution'
      ],
      pricing: 'Starting at $1,800/month',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Create stunning, conversion-optimized websites that represent your brand.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build relationships and drive sales with strategic email campaigns.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on mobile devices with targeted mobile strategies.'
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      description: 'Improve your website performance and increase conversion rates.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to develop a custom strategy.'
    },
    {
      step: '02',
      title: 'Implementation',
      description: 'Our expert team executes the strategy across all relevant digital channels.'
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'We continuously monitor and optimize campaigns for maximum performance.'
    },
    {
      step: '04',
      title: 'Reporting',
      description: 'Receive detailed monthly reports showing progress and ROI metrics.'
    }
  ];

  return (
    <Layout
      title="Digital Marketing Services - Nexora Digital"
      description="Comprehensive digital marketing services including SEO, PPC, social media marketing, and content strategy. Drive growth with our proven strategies and expert team."
      keywords="SEO services, PPC advertising, social media marketing, content marketing, digital marketing services, online marketing, website optimization"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Digital Marketing Services
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your business, 
              increase brand awareness, and drive measurable results.
            </p>
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions to meet your unique business objectives
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-6 shadow-glow`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-secondary mb-6">
                    {service.pricing}
                  </div>
                  <Button variant="premium" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="glass-card hover-scale">
                    <CardHeader>
                      <CardTitle className="text-xl font-poppins">What's Included:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete your digital marketing strategy with these specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={service.title}
                className="text-center hover-scale animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <span className="text-2xl font-bold text-white font-poppins">
                      {step.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-on-scroll">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <div className="text-4xl font-bold mb-2 font-poppins">300%</div>
              <div className="text-white/90">Average Traffic Increase</div>
            </div>
            <div className="animate-on-scroll">
              <Users className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <div className="text-4xl font-bold mb-2 font-poppins">500+</div>
              <div className="text-white/90">Successful Campaigns</div>
            </div>
            <div className="animate-on-scroll">
              <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <div className="text-4xl font-bold mb-2 font-poppins">98%</div>
              <div className="text-white/90">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-12 text-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Let's discuss your digital marketing needs and create a custom strategy 
                that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  View Case Studies
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Services;