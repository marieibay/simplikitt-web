
import React from 'react';
import { SimpliKittLogo } from '../assets/SimpliKittLogo';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SimpliKittLogo className="h-24 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About SimpliKitt</h1>
          <p className="mt-4 text-xl text-gray-600">
            Instant, no-cost digital tools for everyday problems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 prose lg:prose-xl text-left">
          <h2>Our Mission</h2>
          <p>
            In a world filled with complex software and subscriptions, SimpliKitt was created with a simple goal: to provide fast, free, and easy-to-use tools that solve common digital tasks. We believe that you shouldn't have to download an application, sign up for a service, or worry about your privacy just to perform a simple conversion, calculation, or text manipulation.
          </p>
          
          <h2>Privacy First</h2>
          <p>
            Our core principle is privacy. <strong>All tools on SimpliKitt run entirely in your web browser.</strong> This means any data you input or files you upload are processed on your own device. Nothing is ever sent to our servers. Your work remains your own, from start to finish. We don't see it, we don't store it, we don't want it.
          </p>
          
          <h2>How It Works</h2>
          <p>
            We leverage the power of modern web technologies like JavaScript and WebAssembly to build powerful tools that work offline and directly in your browser. This client-side approach not only protects your privacy but also makes our tools incredibly fast, as there's no waiting for server uploads or processing.
          </p>
          
          <h2>Our Promise</h2>
          <ul>
            <li><strong>Free to Use:</strong> Our core tools will always be free.</li>
            <li><strong>Privacy-Focused:</strong> We will never upload or store your data.</li>
            <li><strong>No Sign-ups:</strong> Use our tools instantly, no account required.</li>
            <li><strong>Fast & Simple:</strong> Designed for speed and ease of use.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
