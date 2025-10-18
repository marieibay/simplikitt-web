
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 prose lg:prose-xl">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using SimpliKitt (the "Website"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          SimpliKitt provides a collection of free, client-side online tools. All processing is done locally in your browser. No data is sent to our servers for processing. You understand and agree that the Service is provided "AS-IS" and that we assume no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
        </p>

        <h2>3. User Conduct</h2>
        <p>
          You agree not to use the Service to:
        </p>
        <ul>
          <li>Upload, process, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
          <li>Harm minors in any way.</li>
          <li>Impersonate any person or entity.</li>
        </ul>
        <p>
          You acknowledge that SimpliKitt does not pre-screen content, but that we and our designees shall have the right (but not the obligation) in their sole discretion to refuse or move any content that is available via the Service.
        </p>

        <h2>4. Disclaimers of Warranties</h2>
        <p>
          You expressly understand and agree that:
        </p>
        <ul>
            <li>Your use of the service is at your sole risk. The service is provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</li>
            <li>No advice or information, whether oral or written, obtained by you from us or through or from the service shall create any warranty not expressly stated in the TOS.</li>
        </ul>
        
        <h2>5. Limitation of Liability</h2>
        <p>
          You expressly understand and agree that we shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if we have been advised of the possibility of such damages), resulting from the use or the inability to use the service.
        </p>

        <h2>6. Changes to the Terms</h2>
        <p>
          We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
