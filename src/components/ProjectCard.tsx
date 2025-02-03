import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  repoLink,
  features,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
        >
          <Github size={20} />
          <span>View Repository</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;