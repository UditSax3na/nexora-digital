import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  Lightbulb,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamImage from '@/assets/about-team.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and use cutting-edge strategies to keep you competitive.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and full visibility into our processes and results.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: '10+ years in digital marketing, former Google strategist',
      specialties: ['Strategy', 'Leadership', 'Business Development']
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of SEO',
      bio: 'SEO expert with proven track record of ranking websites #1',
      specialties: ['Technical SEO', 'Content Strategy', 'Analytics']
    },
    {
      name: 'David Kim',
      role: 'PPC Director',
      bio: 'Google Ads certified professional managing $1M+ in ad spend',
      specialties: ['Google Ads', 'Facebook Ads', 'Conversion Optimization']
    },
    {
      name: 'Emily Johnson',
      role: 'Social Media Manager',
      bio: 'Creative storyteller with expertise in viral content creation',
      specialties: ['Content Creation', 'Community Management', 'Influencer Marketing']
    }
  ];

  const milestones = [
    { year: '2019', event: 'Nexora Digital Founded', description: 'Started with a vision to democratize digital marketing' },
    { year: '2020', event: '100 Happy Clients', description: 'Reached our first major milestone during challenging times' },
    { year: '2021', event: 'Award Recognition', description: 'Named "Best Digital Agency" by Marketing Excellence Awards' },
    { year: '2022', event: 'Team Expansion', description: 'Grew to 25+ specialists across all digital channels' },
    { year: '2023', event: '500+ Projects', description: 'Successfully completed over 500 digital marketing campaigns' },
    { year: '2024', event: 'Global Reach', description: 'Expanded services to clients across North America and Europe' }
  ];

  return (
    <Layout
      title="About Us - Nexora Digital Marketing Agency"
      description="Learn about Nexora Digital's mission, values, and expert team. Discover why we're the trusted digital marketing partner for 500+ businesses worldwide."
      keywords="digital marketing team, about nexora digital, marketing agency, digital marketing experts, company mission, marketing professionals"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
                About Nexora Digital
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                We're passionate digital marketers on a mission to help businesses 
                thrive in the digital age. Since 2019, we've been transforming brands 
                through innovative strategies and data-driven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10">
                  Our Portfolio
                </Button>
              </div>
            </div>
            <div className="fade-in-up">
              <img 
                src={teamImage}
                alt="Nexora Digital team working on marketing strategies"
                className="w-full h-auto rounded-2xl shadow-2xl float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="glass-card hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h2 className="text-2xl font-bold text-primary font-poppins">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with cutting-edge digital marketing 
                  strategies that drive real growth, measurable results, and lasting success. 
                  We believe every business deserves to thrive in the digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-secondary mr-4" />
                  <h2 className="text-2xl font-bold text-primary font-poppins">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the world's most trusted digital marketing partner, known for 
                  innovation, transparency, and delivering exceptional results that 
                  transform businesses and create lasting partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we partner with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center hover-scale animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-poppins">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to industry leader - here's how we've grown
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-on-scroll`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover-scale">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2 font-poppins">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center hover-scale animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1 font-poppins">
                    {member.name}
                  </h3>
                  <div className="text-secondary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our team can help you achieve your digital marketing goals 
              and drive sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Start Your Project
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white/40 hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;