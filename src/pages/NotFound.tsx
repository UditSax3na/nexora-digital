import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout
      title="Page Not Found - Nexora Digital"
      description="The page you're looking for doesn't exist. Return to Nexora Digital's homepage to explore our digital marketing services."
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
            <span className="text-4xl font-bold text-white font-poppins">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="premium" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
