
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question, feedback, or a suggestion for a new tool? We'd love to hear from you.
        </p>

        <div className="mt-12">
          <p className="text-xl font-semibold">
            Please reach out to us via email at:
          </p>
          <a href="mailto:support@simplikitt.com" className="text-2xl font-bold text-blue-600 hover:underline mt-2 inline-block">
            support@simplikitt.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
