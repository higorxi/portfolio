import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import StackIcon from 'tech-stack-icons'; 

interface Technology {
  name: string;
  imgSrc?: string;
  icon: string;
}

interface TechnologiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  technologies: Technology[];
  projectDescription: string;
}

const TechnologiesModal: React.FC<TechnologiesModalProps> = ({
  isOpen,
  onClose,
  technologies,
  projectDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 rounded-lg max-w-4xl w-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Tecnologias do Projeto</h2>

        <p className="mb-6">{projectDescription}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center justify-center p-4 border rounded-lg bg-gray-50 shadow-sm">
              <StackIcon name={tech.icon.toLowerCase()} className="w-12 h-12" />
              <span className="text-sm font-semibold ml-4">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesModal;
