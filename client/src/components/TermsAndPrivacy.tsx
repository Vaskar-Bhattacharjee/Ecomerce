import { useState } from 'react';

const TermsAndPrivacy = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('terms')}
          className={`px-6 py-3 font-medium duration-200 text-sm rounded-t-lg transition-colors cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-6 py-3 font-medium duration-200 text-sm rounded-t-lg transition-colors cursor-pointer ${
            activeTab === 'privacy'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'terms' ? (
          <TermsContent />
        ) : (
          <PrivacyContent />
        )}
      </div>
    </div>
  );
};


const TermsContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms of Service</h2>
    <p className="text-gray-600 mb-6"><strong>Last Updated: [Date]</strong></p>

    <Section title="1. Use of Our Services">
      You agree to use our services in compliance with these Terms. Misuse (e.g., hacking, spamming) is prohibited.
    </Section>

    <Section title="2. Account Responsibilities">
      You are responsible for securing your account credentials. Notify us immediately of unauthorized access.
    </Section>

    <Section title="3. Intellectual Property">
      All content, trademarks, and logos are owned by us. Unauthorized use is prohibited.
    </Section>
  </div>
);

const PrivacyContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
    <p className="text-gray-600 mb-6"><strong>Last Updated: [Date]</strong></p>

    <Section title="1. Information We Collect">
      We collect personal data (name, email) and usage data (IP, browser type) via cookies.
    </Section>

    <Section title="2. How We Use Your Data">
      Your data is used to provide services, improve user experience, and for analytics.
    </Section>

    <Section title="3. Data Sharing">
      We do not sell your data but may share it with trusted third-party providers or legal authorities if required.
    </Section>
  </div>
);

// Reusable section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default TermsAndPrivacy;