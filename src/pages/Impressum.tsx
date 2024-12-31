import React from 'react';
import Navigation from '../components/Navigation';
import GridBackground from '../components/GridBackground';
import FooterSection from '../components/Footer/FooterSection';
import LegalSection from '../components/shared/LegalSection';
import { useScrollToTop, useScrollToHash } from '../utils/scrollUtils';

const Impressum = () => {
  useScrollToTop();
  useScrollToHash();

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <div className="pt-44 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#4500F9]/20 via-[#4500F9]/10 to-transparent blur-xl" />
            
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
              <div className="space-y-12">
                <LegalSection title="Impressum">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h3>
                      <p className="text-[#CCAFFF] leading-relaxed">
                        Sentrovo UG (haftungsbeschränkt)<br />
                        Fremersdorfer Straße 53a<br />
                        66663 Merzig
                      </p>
                    </div>

                    <div>
                      <p className="text-[#CCAFFF] leading-relaxed">
                        Handelsregister: HRB 109917<br />
                        Registergericht: Amtsgerichts Saarbrücken
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Vertreten durch:</h3>
                      <p className="text-[#CCAFFF]">Aurélien Wilmes</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
                      <p className="text-[#CCAFFF] leading-relaxed">
                        Telefon: +49 176 44229661<br />
                        E-Mail: info@sentrovo.de
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Umsatzsteuer-ID</h3>
                      <p className="text-[#CCAFFF] leading-relaxed">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE365554378
                      </p>
                    </div>
                  </div>
                </LegalSection>

                <LegalSection title="Angaben zur Berufs­haftpflicht­versicherung">
                  <div className="space-y-4">
                    <p className="text-[#CCAFFF] leading-relaxed">
                      Name und Sitz des Versicherers:<br />
                      Hiscox SA<br />
                      Arnulfstraße 31<br />
                      80636 München<br />
                      Deutschland
                    </p>

                    <p className="text-[#CCAFFF] leading-relaxed">
                      Geltungsraum der Versicherung:<br />
                      Weltweit
                    </p>
                  </div>
                </LegalSection>

                <LegalSection title="EU-Streitschlichtung">
                  <p className="text-[#CCAFFF] leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#4500F9] hover:text-[#4500F9]/80 ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                </LegalSection>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Impressum;