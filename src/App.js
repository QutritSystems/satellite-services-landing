import React, { useState } from 'react';
import { Rocket, Clock, Search, Database } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Satellite Services in Minutes
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            The first marketplace platform streamlining satellite service procurement
            for business and scientific users
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-2 rounded-lg text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Search className="w-12 h-12 text-blue-400" />}
            title="Easy Search"
            description="Find the perfect satellite for your needs with our intelligent search system"
          />
          <FeatureCard
            icon={<Clock className="w-12 h-12 text-blue-400" />}
            title="Real-time Booking"
            description="Book satellite time slots instantly through our streamlined platform"
          />
          <FeatureCard
            icon={<Database className="w-12 h-12 text-blue-400" />}
            title="API Access"
            description="Integrate satellite services directly into your applications"
          />
          <FeatureCard
            icon={<Rocket className="w-12 h-12 text-blue-400" />}
            title="Rapid Deployment"
            description="Get your satellite services up and running quickly"
          />
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Search"
              description="Browse our marketplace of available satellite services"
            />
            <StepCard
              number="2"
              title="Book"
              description="Select your time slot and complete booking in minutes"
            />
            <StepCard
              number="3"
              title="Launch"
              description="Access your satellite service through our platform or API"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-blue-200">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="border border-blue-500 rounded-lg p-6">
    <div className="text-3xl font-bold text-blue-400 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-blue-200">{description}</p>
  </div>
);

export default LandingPage;
