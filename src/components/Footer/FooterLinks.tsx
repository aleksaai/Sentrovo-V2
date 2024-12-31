import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-white font-semibold">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            {link.isExternal ? (
              <a
                href={link.href}
                className="text-[#CCAFFF] hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-[#CCAFFF] hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;