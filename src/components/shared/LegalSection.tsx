import React from 'react';

interface LegalSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const LegalSection = ({ id, title, children }: LegalSectionProps) => {
  return (
    <div id={id} className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default LegalSection;