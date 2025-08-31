
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  Search,
  BarChart3,
  MessageSquare,
  PenTool,
  Target,
  Zap
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroImage from '@/assets/hero-bg.jpg';
import servicesImage from '@/assets/services-illustration.jpg';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
  ];

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns across all major platforms.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Build engagement and grow your brand presence across all social platforms.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Nexora Digital transformed our online presence. Our traffic increased by 300% in just 6 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Professional, results-driven, and always available. The best digital marketing partner we\'ve had.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Studio',
      content: 'Their social media strategies doubled our engagement rates. Highly recommend their services!',
      rating: 5
    },
  ];

  return (
    <Layout
      title="Nexora Digital - Premier Digital Marketing Agency"
      description="Transform your business with Nexora Digital's expert digital marketing services. Specializing in SEO, PPC, social media marketing, and content strategy to drive growth and ROI."
      keywords="digital marketing agency, SEO services, PPC advertising, social media marketing, content marketing, online marketing, digital strategy"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="stagger-children">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins">
              Transform Your
              <span className="block bg-gradient-to-r from-secondary-light to-accent bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive growth, increase conversions, and dominate your market with our 
              data-driven digital marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="text-white border-white/40 hover:bg-white/10">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group hover-scale"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to drive your business growth 
              and maximize your online potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover-scale bg-white/50 backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-all duration-500"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="premium" size="lg">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
                Why Choose Nexora Digital?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We combine cutting-edge technology with proven strategies to deliver 
                exceptional results for our clients.
              </p>
              
              <div className="space-y-6">
                {[
                  'Data-driven strategies that deliver measurable results',
                  'Expert team with 5+ years of industry experience',
                  'Customized solutions for your unique business needs',
                  '24/7 support and dedicated account management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-lg text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="secondary" size="lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <img 
                src={servicesImage}
                alt="Digital marketing services illustration"
                className="w-full h-auto rounded-2xl shadow-xl hover:shadow-glow transition-all duration-500 float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="hover-scale glass-card"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our digital marketing expertise can help you achieve 
              your business goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                  Start Your Project Today
                  <Target className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+15551234567">
                <Button variant="outline" size="xl" className="text-white border-white/40 hover:bg-white/10">
                  Call Now: (555) 123-4567
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
