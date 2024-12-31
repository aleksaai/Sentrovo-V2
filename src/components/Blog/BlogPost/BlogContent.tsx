import React from 'react';

interface BlogContentProps {
  title: string;
  content: string[];
}

const BlogContent = ({ title, content }: BlogContentProps) => {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-8">
        {title}
      </h1>
      {content.map((paragraph, index) => {
        // Check if paragraph contains bullet points
        if (paragraph.includes('•')) {
          const [heading, ...points] = paragraph.split('\n');
          return (
            <div key={index} className="mb-8">
              <p className="text-[#CCAFFF] text-lg mb-4">{heading}</p>
              <ul className="space-y-2">
                {points.map((point, i) => (
                  <li key={i} className="text-[#CCAFFF] flex items-start gap-2">
                    <span className="text-[#4500F9]">•</span>
                    <span>{point.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        
        return (
          <p key={index} className="text-[#CCAFFF] text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      })}
    </article>
  );
};

export default BlogContent;