import React from 'react';
import PartnerGrid from './PartnerGrid';
import GlowTransition from './GlowTransition';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <GlowTransition />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-4">
            Diese Partner setzen bereits auf Sentrovo.
          </h2>
          <p className="text-xl text-[#CCAFFF] mb-20">
            Bereits über 200 Unternehmen haben von unserem KI-Service profitiert
          </p>
          <PartnerGrid />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4500F9]/10 via-[#4500F9]/5 to-transparent blur-3xl" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              companyLogo="https://i.postimg.cc/YShWsNw4/image-19.png"
              name="Jonah Bosserhoff"
              role="Chief Operations Officer"
              company="Valkental GmbH"
              quote="Die Jungs sind absolute Experten auf dem Gebiet und sowohl der Output, als auch die Kommunikation waren einfach top. Feedback wurde super schnell umgesetzt und eigene Ideen immer wieder mit eingebracht."
            />
            <TestimonialCard 
              companyLogo="https://i.postimg.cc/8zTn66st/13.png"
              name="Aleksa Spalevic"
              role="Chief Executive Officer"
              company="DestinyMedia GmbH"
              quote="Mit Sentrovo haben wir einen Partner gefunden, der uns nicht nur technisch berät, sondern auch strategisch unterstützt. Die KI-Integration hat unsere Kundenbetreuung auf ein neues Level gehoben."
            />
            <TestimonialCard 
              companyLogo="https://i.postimg.cc/G28BdRTG/Untitled-design-2024-12-26-T192013-648.png"
              name="Yves Meyer"
              role="Prokurist"
              company="ITB GmbH"
              quote="Als junges Unternehmen hat Sentrovo nicht nur durch innovative Ideen überzeugt, sondern auch durch eine klare Expertise im Bereich Künstliche Intelligenz."
            />
            <TestimonialCard 
              companyLogo="https://i.postimg.cc/rwpNTCDX/Untitled-design-2024-12-26-T131426-508.png"
              name="Maximilian Keiser"
              role="Founder"
              company="Adictive"
              quote="Sentrovo hat uns dabei geholfen, unsere digitale Transformation erfolgreich umzusetzen. Die KI-gestützte Prozessoptimierung hat unsere Arbeitsabläufe revolutioniert."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;